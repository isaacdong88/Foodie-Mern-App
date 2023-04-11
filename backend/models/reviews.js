const mongoose = require("mongoose");

const reviewsSchema = new mongoose.Schema({
  reviews: [Array],
});

const Reviews = mongoose.model("Reviews", reviewsSchema);

module.exports = Reviews;
