const router = require('express').Router();
const { json } = require('express');
const Product = require("../models/Product");
const User = require('../models/User');

const { 
    verifyToken,
    verifyTokenAndAuthorization, 
    verifyTokenAndAdmin 
} = require('./verifyToken');

// verifyToken -> lvl 1
// verifyTokemAuthorization -> lvl 2
// verifyTokenAdmin -> lvl 3

// Create Product
router.post("/:userId", verifyTokenAndAdmin, async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        const savedProduct = await newProduct.save();

        const userId = req.params.userId.toString();
        await User.findByIdAndUpdate(userId, {
            $push: { productsAdded: savedProduct._id.toString() }
        }, {new: true});
        res.status(200).json(savedProduct);
    } catch (error) {
        res.status(500).json(error);
    }
});

// use productId in params?
router.put("/review/post", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const userId = req.body.userId.toString();
        const userReview = req.body.review
        const rating = req.body.rating
        const reviewData = {
            userId: userId,
            review: userReview,
            rating: rating
        }
        const productId = req.body.productId;

        const product = await Product.findOne({ _id: productId });

        if (!product) {
            res.status(404).json({"message": "Product Not Found"});
        }

        // Update existing review
        const updateExistingReview = () => {
            for (const rev of product.reviews) {
                if (rev.userId.toString() === userId) {
                    rev.rating = rating;
                    rev.review = userReview;
                    return true;
                }
            }
            return false;
        }
        
        if (updateExistingReview()) {
            const updatedProduct = await Product.findByIdAndUpdate(productId, {
                $set: product
            }, {new: true});

            res.status(200).json({"message": updatedProduct});
        } else {
            // Create a new review and append
            const updatedProduct = await Product.findByIdAndUpdate(productId, {
                $push: { reviews: reviewData }
            }, {new: true});
            res.status(200).json(updatedProduct);
        }
    } catch (err) {
        res.status(500).json(err);
    }
})

// get all the reviews of a product
router.get("/review/get/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const prod = await Product.findById(req.params.id);
        const reviews = prod.reviews;

        const userPromises = reviews.map(review => User.findById(review.userId));
        const users = await Promise.all(userPromises);

        let iter = -1;
        const reviewsAndUsers = reviews.map((review) => {
            iter += 1
            return {
                "review": review.review,
                "rating": review.rating,
                "user": {
                    "username": users[iter].username,
                    "email": users[iter].email,
                    "phone": users[iter].phone
                }
            }
        })

        res.status(200).json(reviewsAndUsers);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Update Product
// index -> user -> verifyToken for any change in info
// User registers -> Logins -> gets token -> 
// iter through user.addedProducts -> if provided productId in array -> update
router.put('/:userId/:productId', verifyTokenAndAdmin, async (req, res) => {
    try {
        const newProductData = req.body;
        const userId = req.params.userId.toString();
        const productId = req.params.productId.toString();
        const user = await User.findById(userId);

        if (!user.productsAdded.includes(productId)) {
            return res.status(400).json({ "message": "Product does not exist" });
        }

        const updatedProduct = await Product.findByIdAndUpdate(productId, {
            $set: newProductData
        }, {new: true});

        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json(err);
    }
});

// Delete Product
// Same as update
router.delete("/delete/:userId/:productId", verifyTokenAndAdmin, async (req, res) => {
    try {
        // Accessing the DB and deleting by ID
        const userId = req.params.userId.toString();
        const productId = req.params.productId.toString();
        const user = await User.findById(userId);

        if (!user.productsAdded.includes(productId)) {
            return res.status(400).json({ "message": "Product does not exist" });
        }

        await Product.findByIdAndDelete(productId).then(() => {
            res.status(200).json({"message": "Product Deleted!"});
        });
        
    } catch (err) {
        res.status(500).json(err);
    }
})

// Get Product
// Anyone can GET products -> no verification needed
router.get("/:id", async (req, res) => {
    try {
        // Accessing the DB and Getting a Product by ID
        const product = await Product.findById(req.params.id);

        res.status(200).json(product);
    } catch (err) {
        res.status(500).json(err);
    }
})

// Get All Products
// No verification needed
router.get("/", async (req, res) => {
    // returns products specific to the admin id provided
    // const adminId = req.params.adminId.toString();
    const adminId = req.query.adminId;
    if (adminId) {
        try {
            const user = await User.findById(adminId);
            const userProductIds = user.productsAdded;
          
            const userProducts = await Promise.all(userProductIds.map(async (productId) => {
              const product = await Product.findById(productId);
              return product;
            }));
          
            res.status(200).json(userProducts);
          } catch (err) {
            res.status(500).json(err);
          }
          
    } else {
        const qNew = req.query.new;
        try {
            // Accessing the DB and Getting all users
            // filter the users according to the query
            let products;
            if (qNew) {
                // return the 5 most recent products
                products = await Product.find().sort({ createdAt: -1 }).limit(5)
            } else {
                // return all products
                products = await Product.find();
            }

            res.status(200).json(products);
        } catch (err) {
            res.status(500).json(err);
        }
    }
});

module.exports = router