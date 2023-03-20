const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    products: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
        quantity: { type: Number, default: 1, required: true },
        price: { type: Number, required: true }
      },
    ],
    billing: {
      total_amount: { type: Number, required: true },
      discount: { type: Number, default: 0 },
    },
    delivery_address: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      postal_code: { type: Number, required: true },
      country: { type: String, required: true },
    },  
    payment_method: { type: String, required: true },
    
    
    status: { type: String, default: "pending", enum: ['pending', 'processing', 'shipped', 'delivered']},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
