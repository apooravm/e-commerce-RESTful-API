const mongoose = require('mongoose');
// Creating Order schema

const OrderSchema = new mongoose.Schema(
    {
        userId: { type: String, required: true },
        products: [
            {
                productID: { type: String },
                quantity: { type: Number, default: 1}
            }
        ],
        amount: { type: Number, required: true },
        address: { type: Object, required: true},
        status: { type: String, default: "pending"}
    },
    { timestamps: true } // createdAt and UpdatedAt time noted
);

module.exports = mongoose.model("Order", OrderSchema);