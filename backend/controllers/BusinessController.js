const Business = require("../models/business");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

//fetch one specifice businesses, route GET /business/:id
const fetchBusiness = async (req, res) => {
  try {
    const business = await Business.findById(req.params.id);
    res.status(200).json(business);
  } catch (error) {
    res.status(400).json({ message: "No business available" });
  }
};

//fetch all businesses, route GET /business/businesses
const fetchBusinesses = async (req, res) => {
  try {
    const businesses = await Business.find();
    res.status(200).json(businesses);
  } catch (error) {
    res.status(400).json({ message: "No business available" });
  }
};

//Get business, route Post /business/login
const loginBusiness = async (req, res) => {
  try {
    const { email2, password2 } = req.body;
    const business = await Business.findOne({ email: email2 });
    if (business && (await bcrypt.compare(password2, business.password))) {
      res.status(200).json({
        _id: business.id,
        username: business.username,
        email: business.email,
        token: genToken(business._id),
        accountType: business.accountType,
        image: business.image,
      });
    } else {
      res.status(400).json({ message: "Invalid Credentials" });
    }
  } catch (error) {
    res.status(400).json({ message: "Missing login info" });
  }
};

//Create business, route Post /business
const createBusiness = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    if (!username || !password || !email) {
      res.status(400).json({ message: "Please fill in all fields" });
    } else {
      const salt = await bcrypt.genSalt(10);
      const hassedPassword = await bcrypt.hash(password, salt);
      const createBusiness = await Business.create({
        username: req.body.username,
        password: hassedPassword,
        email: req.body.email,
        accountType: "business",
      });
      res.status(200).json({
        _id: createBusiness.id,
        username: createBusiness.username,
        email: createBusiness.email,
        token: genToken(createBusiness._id),
        accountType: createBusiness.accountType,
      });
    }
  } catch (error) {
    res.status(400).json({ method: "Business already exist" });
  }
};

//Edit business, route Put /business
const editBusiness = async (req, res) => {
  try {
    const editBusiness = await Business.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.status(200).json(editBusiness);
  } catch (error) {
    res.status(400).json({ method: "Invalid Business" });
  }
};

//Delete business, route Delete /business
const deleteBusiness = async (req, res) => {
  try {
    const deleteBusiness = await Business.findByIdAndRemove(req.params.id);
    res.status(200).json({ id: req.params.id });
  } catch (error) {
    res.status(400).json({ method: "Invalid Business" });
  }
};

//Generate token
const genToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

module.exports = {
  fetchBusiness,
  fetchBusinesses,
  loginBusiness,
  createBusiness,
  editBusiness,
  deleteBusiness,
};
