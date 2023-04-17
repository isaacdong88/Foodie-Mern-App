const express = require("express");
const router = express.Router();
const {
  fetchBusiness,
  fetchBusinesses,
  loginBusiness,
  createBusiness,
  editBusiness,
  deleteBusiness,
} = require("..//controllers/BusinessController");

const { protect } = require("..//middleware/authMiddleware");

router.get("/businesses", fetchBusinesses);
router.get("/business/:id", fetchBusiness);
router.post("/login", loginBusiness);
router.post("/", createBusiness);
router.put("/:id", protect, editBusiness);
router.delete("/:id", protect, deleteBusiness);

module.exports = router;
