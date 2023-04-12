const express = require("express");
const router = express.Router();
const { fetchReviews } = require("../controllers/ReviewsController");

// router.get("/", controller.get);
router.get("/", fetchReviews);
router.post("/", controller.post);
router.put("/:id", controller.put);
router.delete("/:id", controller.delete);

module.exports = router;
