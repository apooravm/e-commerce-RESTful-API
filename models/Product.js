const mongoose = require('mongoose');
// Creating Product schema

const ProductSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, unique: true },
        description: { type: String, required: true},
        image: { type: String, required: true},
        category: { type: Array },
        size: { type: String },
        colour: { type: String },
        price: { type: Number, required: true},
    },
    { timestamps: true } // createdAt and UpdatedAt time noted
);

module.exports = mongoose.model("Product", ProductSchema);