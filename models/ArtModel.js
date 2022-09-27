const mongoose = require("mongoose");

// the schema model for Art
const artSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  image: {data: Buffer,
    contentType: String},
  soldOut: Boolean,
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
