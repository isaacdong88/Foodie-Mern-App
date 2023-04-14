const express = require("express");
const router = express.Router();
const {
  loginBusiness,
  createBusiness,
  editBusiness,
  deleteBusiness,
} = require("..//controllers/BusinessController");

router.post("/login", loginBusiness);
router.post("/", createBusiness);
router.put("/:id", editBusiness);
router.delete("/:id", deleteBusiness);

module.exports = router;
