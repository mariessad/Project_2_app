const mongoose = require("mongoose");

// the schema model for adding item to cart
const cartSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  image: {
    type: String,
    default:
      "https://tse2.mm.bing.net/th?id=OIP.U2iQ7wNK6ZzTW_traW_-PQHaHa&pid=Api&P=0",
  },
  //   soldOut: Boolean,
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
