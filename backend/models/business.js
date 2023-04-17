const mongoose = require("mongoose");

const businessSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  reviews: { type: mongoose.Schema.Types.ObjectId, ref: "Reviews" },
  businessname: { type: String },
  description: { type: String },
  menu: [Object],
  accountType: { type: String, required: true },
});

const Business = mongoose.model("Business", businessSchema);

module.exports = Business;
