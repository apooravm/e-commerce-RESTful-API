const mongoose = require('mongoose');
// Creating User schema

const UserSchema = new mongoose.Schema(
    {
        first_name: { type: String, required: true },
        last_name: { type: String, required: true },
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true},
        password: { type: String, required: true},
        phone: { type: Number },
        address: {
            street: { type: String, required: true },
            city: { type: String, required: true },
            state: { type: String, required: true },
            postal_code: { type: Number, required: true },
            country: { type: String, required: true },
          },        
        orders: [
            { type: mongoose.Schema.Types.ObjectId, ref: 'Order' }
        ],
        cart: [
            {
                productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
                quantity: { type: Number, default: 1, min: 1, required: true }
            }
        ],
        isAdmin: { type: Boolean, default: false},
        productsAdded: [
            { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true }
        ]
    },
    { timestamps: true } // createdAt and UpdatedAt time noted
);

module.exports = mongoose.model("User", UserSchema);