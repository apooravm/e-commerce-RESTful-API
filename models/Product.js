const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        product_id: { type: Number, required: true, unique: true},

        // UserId
        user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

        // link onsite
        link: { type: String },

        variant_sku: { type: String },

        product_type: { type: String },

        images: [{ type: String }],

        title: { type: String, required: true },

        colour: { type: String, required: true },

        brand: { type: String },

        is_in_stock: { type: Boolean, required: true },

        stock_amount: { type: Number },

        current_price: { type: Number, required: true },

        actual_price: { type: Number, required: true },

        specifications: {},

        description: {},


        // // description
        // body: { type: String, required: true },
        // // details
        // product_details: { type: String, required: true },
        // title: { type: String, required: true },
        // size: { type: String },
        // brand: { type: String, required: true },
        // // link to image
        // images: [{ type: String, required: true }],
        // is_in_stock: { type: String, required: false },
        // type: { type: String },
        // ideal_for: { type: String },
        // complete_the_look: { type: String },
        // // colours
        // actual_color: { type: String, required: true },
        // dominant_color: { type: String, required: true },
        // // How to wash, etc
        // care_instructions: { type: String, required: true },
        // // Cotton, etc
        // dominant_material: { type: String, required: true },

        // // onsite price
        // variant_price: { type: Number, required: true },
        // // Actual price
        // variant_compare_at_price: { type: Number, required: true },

        // // others
        // inventory: { type: String },
        // specifications: { type: String },
        // FIELD26: { type: String },
        // size_fit: { type: String },

        // Product Reviews
        reviews: [
            {
                userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
                review: { type: String, required: true },
                rating: { type: Number, required: true, min: 0, max: 5 }

            }
        ]
    },
    { timestamps: true } // createdAt and UpdatedAt time noted
)

module.exports = mongoose.model("Product", ProductSchema);