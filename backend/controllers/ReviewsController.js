const Review = require("../models/reviews");

//Get reviews, route GET /reviews
const fetchReviews = async (req, res) => {
  try {
    res.status(200).json({ message: "Get reviews" });
  } catch (error) {
    res.status(400).json({ message: "Can't find reviews" });
  }
};

module.exports = {
  fetchReviews,
};

// module.exports = {
//   get: (req, res) => {
//     res.send("Reviews");
//   },
//   post: (req, res) => {},
//   put: (req, res) => {},
//   delete: (req, res) => {},
// };

// exports.fetchReviews = async (req, res) => {
//   try {
//     const reviews = Review.find({ [req.query.user]: req.params.id });

//     res.status(200).json({ reviews });
//   } catch (error) {
//     // Change status to correct one
//     res.status(400).json({ message: "Could not find reviews." });
//   }
// };
