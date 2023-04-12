const User = require("../models/customer");

//Get user, route Get /user
const fetchUser = async (req, res) => {
  try {
    res.status(200).json({ message: "Get user" });
  } catch (error) {
    res.status(400).json({ message: "Invalid User" });
  }
};

//Create user, route Post /user
const createUser = async (req, res) => {
  try {
    res.status(200).json({ message: "Create user" });
  } catch (error) {
    res.status(400).json({ message: "Invalid User" });
  }
};

//Edit user, route Put /user/:id
const editUser = async (req, res) => {
  try {
    res.status(200).json({ message: "Edit user" });
  } catch (error) {
    res.status(400).json({ message: "Invalid User" });
  }
};

//Delete user, route Delete /user/:id
const deleteUser = async (req, res) => {
  try {
    res.status(200).json({ message: "Delete user" });
  } catch (error) {
    res.status(400).json({ message: "Invalid User" });
  }
};

module.exports = {
  fetchUser,
  createUser,
  editUser,
  deleteUser,
};
