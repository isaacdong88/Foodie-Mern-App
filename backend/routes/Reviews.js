const express = require("express");
const router = express.Router();
const {
  fetchReviews,
  postReviews,
  editReviews,
  deleteReviews,
} = require("../controllers/ReviewsController");

// router.get("/", controller.get);
router.get("/", fetchReviews);
router.post("/", postReviews);
router.put("/:id", editReviews);
router.delete("/:id", deleteReviews);

module.exports = router;
