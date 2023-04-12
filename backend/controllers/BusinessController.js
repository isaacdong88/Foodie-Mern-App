const Business = require("../models/business");
//Get business, route GET /business
const fetchBusiness = async (req, res) => {
  try {
    res.status(200).json({ method: "Get Business" });
  } catch (error) {
    res.status(400).json({ method: "Invalid Business" });
  }
};

//Create business, route Post /business
const createBusiness = async (req, res) => {
  try {
    res.status(200).json({ method: "Create Business" });
  } catch (error) {
    res.status(400).json({ method: "Invalid Business" });
  }
};

//Edit business, route Put /business
const editBusiness = async (req, res) => {
  try {
    res.status(200).json({ method: "Edit Business" });
  } catch (error) {
    res.status(400).json({ method: "Invalid Business" });
  }
};

//Delete business, route Delete /business
const deleteBusiness = async (req, res) => {
  try {
    res.status(200).json({ method: "Delete Business" });
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
