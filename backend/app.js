require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;
const mongoose = require("mongoose");
const methodOverride = require("method-override");

//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});

app.use(cors());

mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

//Routes
const userRoute = require("./routes/User");
const reviewsRoute = require("./routes/Reviews");
const businessRoute = require("./routes/Business");

app.use("/user", userRoute);
app.use("/reviews", reviewsRoute);
app.use("/business", businessRoute);

//Server
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
