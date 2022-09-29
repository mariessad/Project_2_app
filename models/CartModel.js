const mongoose = require("mongoose");

// the schema model for adding item to cart
const cartSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   price: { type: Number, required: true },
//   image: {data: Buffer,
//     contentType: String},
//   soldOut: Boolean,
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
