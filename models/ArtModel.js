const mongoose = require("mongoose");

// the schema model for Art
const artSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  image: {data: Buffer,
    contentType: String},
  soldOut: Boolean,
});

const Art = mongoose.model("Art", artSchema);

module.exports = Art;
