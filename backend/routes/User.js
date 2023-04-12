const express = require("express");
const router = express.Router();
const {
  fetchUser,
  createUser,
  editUser,
  deleteUser,
} = require("../controllers/UserController");

router.get("/", fetchUser);
router.post("/", createUser);
router.put("/:id", editUser);
router.delete("/:id", deleteUser);

module.exports = router;
