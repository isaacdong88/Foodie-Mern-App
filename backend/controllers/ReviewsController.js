const Review = require("../models/reviews");

//Get reviews for restaurants, route GET /reviews/:id
const fetchReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ business: req.params.id });
    res.status(200).json(reviews);
  } catch (error) {
    res.status(400).json({ message: "Can't find reviews" });
  }
};

//one review for user edit /review/:id
const fetchReview = async (req, res) => {
  try {
    const reviews = await Review.findById(req.params.id);
    res.status(200).json(reviews);
  } catch (error) {
    res.status(400).json({ message: "Can't find review" });
  }
};

//Get user reviews, route GET /reviews
const userReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ user: req.user.id });
    res.status(200).json(reviews);
  } catch (error) {
    res.status(400).json({ message: "Can't find reviews" });
  }
};

//Create reviews, route Post /reviews
const createReviews = async (req, res) => {
  try {
    const reviews = await Review.create({
      review: req.body.review,
      rating: req.body.rating,
      user: req.user.id,
      customerName: req.user.username,
      business: req.body.business,
      businessName: req.body.businessName,
    });
    res.status(200).json(reviews);
  } catch (error) {
    res.status(400).json({ message: "Can't create review" });
  }
};

//Edit reviews, route Put /reviews/:id
const editReviews = async (req, res) => {
  try {
    const editReview = await Review.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(editReview);
  } catch (error) {
    res.status(400).json({ message: "Can't find reviews" });
  }
};

//Delete reviews, route Delete /reviews/:id
const deleteReviews = async (req, res) => {
  try {
    const deleteReviews = await Review.findByIdAndRemove(req.params.id);
    res.status(200).json({ id: req.params.id });
  } catch (error) {
    res.status(400).json({ message: "Can't find reviews" });
  }
};
module.exports = {
  userReviews,
  fetchReviews,
  createReviews,
  editReviews,
  deleteReviews,
  fetchReview,
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
