const mongoose = require("mongoose");

const reviewsSchema = new mongoose.Schema(
  {
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Customers",
    //   required: true,
    // },
    // business: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Business",
    //   required: true,
    // },
    review: {
      type: String,
      required: true,
    },
    // rating: {
    //   type: Number,
    //   required: true,
    // },
  },
  { timestamps: true }
);

const Reviews = mongoose.model("Reviews", reviewsSchema);

module.exports = Reviews;
