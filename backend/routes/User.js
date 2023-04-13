const express = require("express");
const router = express.Router();
const {
  loginUser,
  createUser,
  getUser,
  deleteUser,
  userReviews,
} = require("../controllers/UserController");

router.post("/login", loginUser);
router.post("/", createUser);
// router.get("/auth", getUser);
router.get("/reviews/:id", userReviews);
router.delete("/:id", deleteUser);

module.exports = router;
