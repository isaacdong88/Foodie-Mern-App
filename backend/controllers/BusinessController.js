const Business = require("../models/business");
//Get business, route GET /business
const fetchBusiness = async (req, res) => {
  try {
    const business = await Business.find();
    res.status(200).json(business);
  } catch (error) {
    res.status(400).json({ method: "Invalid Business" });
  }
};

//Create business, route Post /business
const createBusiness = async (req, res) => {
  try {
    const createBusiness = await Business.create({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
    });
    res.status(200).json(createBusiness);
  } catch (error) {
    res.status(400).json({ method: "Invalid Business" });
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

module.exports = {
  fetchBusiness,
  createBusiness,
  editBusiness,
  deleteBusiness,
};
