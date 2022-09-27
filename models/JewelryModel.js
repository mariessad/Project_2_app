const mongoose = require("mongoose");

// the schema model for Art
const jewelrySchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  image: {data: Buffer,
    contentType: String},
  soldOut: Boolean,
});

const Jewelry = mongoose.model("Jewelry", jewelrySchema);

module.exports = Jewelry;
