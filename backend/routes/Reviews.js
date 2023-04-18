const express = require("express");
const router = express.Router();
const {
  userReviews,
  fetchReviews,
  createReviews,
  editReviews,
  deleteReviews,
  fetchReview,
} = require("../controllers/ReviewsController");

const { protect } = require("../middleware/authMiddleware");

// router.get("/", controller.get);
router.get("/", protect, userReviews);
router.get("/:id", fetchReviews);
router.get("/review/:id", protect, fetchReview);
router.post("/", protect, createReviews);
router.put("/:id", protect, editReviews);
router.delete("/:id", protect, deleteReviews);

module.exports = router;
