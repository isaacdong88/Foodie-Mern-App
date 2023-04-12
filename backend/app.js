const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;

const userRoute = require("./routes/User");
const reviewsRoute = require("./routes/Reviews");
const businessRoute = require("./routes/Business");

// app.use("/user", userRoute);
app.use("/reviews", reviewsRoute);
// app.use("/business", businessRoute);

//Middleware
app.use(express.urlencoded({ extended: false }));
// app.use(methodOverride("_method"));
app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});

app.use(cors());

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
