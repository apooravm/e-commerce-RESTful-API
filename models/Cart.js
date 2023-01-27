const mongoose = require('mongoose');
// Creating Cart schema

const CartSchema = new mongoose.Schema(
    {
        userId: { type: String, required: true },
        products: [
            {
                productID: { type: String },
                quantity: { type: Number, default: 1}
            }
        ]
    },
    { timestamps: true } // createdAt and UpdatedAt time noted
);

module.exports = mongoose.model("Cart", CartSchema);