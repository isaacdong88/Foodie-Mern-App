const express = require("express");
const router = express.Router();
const {
  fetchBusiness,
  createBusiness,
  editBusiness,
  deleteBusiness,
} = require("..//controllers/BusinessController");

router.get("/", fetchBusiness);
router.post("/", createBusiness);
router.put("/:id", editBusiness);
router.delete("/:id", deleteBusiness);

module.exports = router;
