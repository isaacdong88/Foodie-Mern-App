const express = require("express");
const router = express.Router();
const {
  fetchReviews,
  createReviews,
  editReviews,
  deleteReviews,
} = require("../controllers/ReviewsController");

const { protect } = require("../middleware/authMiddleware");

// router.get("/", controller.get);
router.get("/", fetchReviews);
router.post("/", protect, createReviews);
router.put("/:id", editReviews);
router.delete("/:id", deleteReviews);

module.exports = router;
