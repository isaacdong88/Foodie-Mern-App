const mongoose = require("mongoose");

const businessSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  reviews: { type: mongoose.Schema.Types.ObjectId, ref: "Reviews" },
});

const Business = mongoose.model("Business", businessSchema);

module.exports = Business;
