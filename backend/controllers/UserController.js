const User = require("../models/customer");

//Get user, route Get /user
const fetchUser = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: "Invalid User" });
  }
};

//Create user, route Post /user
const createUser = async (req, res) => {
  try {
    const createUser = await User.create({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
    });
    res.status(200).json(createUser);
  } catch (error) {
    res.status(400).json({ message: "Invalid User" });
  }
};

//Edit user, route Put /user/:id
const editUser = async (req, res) => {
  try {
    const editUser = await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(editUser);
  } catch (error) {
    res.status(400).json({ message: "Invalid User" });
  }
};

//Delete user, route Delete /user/:id
const deleteUser = async (req, res) => {
  try {
    const deleteUser = await User.findByIdAndRemove(req.params.id);
    res.status(200).json({ id: req.params.id });
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
