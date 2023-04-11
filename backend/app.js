const express = require("express");
const cors = require("cors");
const app = express();

//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});

app.use(cors());

module.exports = app;
