const router = require('express').Router();
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');
const User = require("../models/User")

router.get('/usertest', (req, res) => {
    res.send(`<h1>Bru🙄</h1>`);
})

// verifyToken => header includes 'Bearer <token>
// Token expires in 3d

// Update User
// index -> user -> verifyToken for any change in info
// User registers -> Logins -> gets token -> 
router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {
    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(
            req.body.password,
            process.env.API_AUTH_KEY
        ).toString();
    }

    try {
        // index -> user -> verify token -> create req.user -> auth token
        // Accessing the DB and updating the attributes by ID
        // req.body contains {username: "mon"}
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true})
        // new: true returns the updated object instead of the doc

        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json(err)
    }
})

// Add Items to Cart
// If item already exists, it is updated
// If the quanity is 0 and the item exists, it is deleted
// If a new item is attempted to be added with a quanity 0, an error is returned
router.put("/cart/add/:userId", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const userId = req.params.userId.toString();
        const productId = req.body.productId.toString();
        const productQuantity = req.body.productQuantity;

        const productData = {
            productId: productId,
            quantity: productQuantity
        }

        // Check if product already in cart
        const currUser = await User.findById(userId.toString());

        const updateExistingCart = () => {
            for (const product of currUser.cart) {
                // If quantity < 0 => delete the key/product
                if (product.productId.toString() === productId) {
                    // Update Quanity
                    product.quantity = productQuantity;
                    return true;
                }
            }
            return false;
        }

        if (updateExistingCart()) {
            // Delete the products if their quantity < 1
            currUser.cart = currUser['cart'].filter(product => product.quantity > 0);

            const updatedUser = await User.findByIdAndUpdate(userId, {
                // reassign the cart
                $set: { cart: currUser.cart }
            }, {new: true});
            res.status(200).json({"message": "Cart Updated", "cart": updatedUser.cart})
        } else {
            // Add new Product
            if (productQuantity < 1) {
                res.status(400).json({"message": "Invalid Quantity"});
                return
            }

            const updatedUser = await User.findByIdAndUpdate(userId, {
                $push: { cart: productData }
            }, {new: true});
            res.status(200).json({"message": "Product Added", "cart": updatedUser.cart})
        }
    } catch (err) {
        res.status(500).json(err);
    }
    
});

// Delete User
// takes in ID
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        // Accessing the DB and deleting by ID
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User Profile Deleted!");
    } catch (err) {
        res.status(500).json(err);
    }
})

// Get User
// ID
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        // Accessing the DB and Getting a user by ID
        const user = await User.findById(req.params.id);

        const { password, ...others } = user._doc;
        // Send everything but the password
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err);
    }
})

// Get All Users
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    const query = req.query.new;
    try {
        // Accessing the DB and Getting all users
        // filter the users according to the query
        // if query new == true
        // return the 5 most recent users
        const users = query
            ? await User.find().sort({_id: -1}).limit(5)
            : await User.find();

        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
})

// Get User Stats
// eg: total num of users in a certain month
router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

    try {
        const data = await User.aggregate([
            { $match: { createdAt: { $gte: lastYear } } },
            {
                $project: {
                    month: { $month: "$createdAt" }
                }
            },
            {
                $group: {
                    _id: "$month", 
                    total: { $sum: 1 }
                }
            }
        ]);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
})

// Create Products
// Add to addedProducts array in User schema --> Done in product.js 
// Add to Products
// Get User uploaded products -> Iter theough User.addedProducts and get products using the productId
// update Products -> 
router.get("/admin/get/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId.toString());
        res.status(200).json(user.productsAdded);   
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;