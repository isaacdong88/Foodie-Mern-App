const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  // reviews: { type: mongoose.Schema.Types.ObjectId, ref: "Reviews" },
});

const Customers = mongoose.model("Customer", customerSchema);

module.exports = Customers;
