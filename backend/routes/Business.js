const express = require("express");
const router = express.Router();
const {
  fetchBusinesses,
  loginBusiness,
  createBusiness,
  editBusiness,
  deleteBusiness,
} = require("..//controllers/BusinessController");

const { protect } = require("..//middleware/authMiddleware");

router.get("/businesses", fetchBusinesses);
router.post("/login", loginBusiness);
router.post("/", createBusiness);
router.put("/:id", protect, editBusiness);
router.delete("/:id", protect, deleteBusiness);

module.exports = router;
