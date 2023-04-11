const express = require("express");
const router = express.Router();
const controller = require("../controllers/BusinessController");

router.get("/", controller.get);

module.exports = router;
