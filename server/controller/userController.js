import User from "../models/userModel.js";

// for create API
export const create = async (req, res) => {
  try {
    const userData = new User(req.body);
    const savedData = await userData.save();
    res.status(201).json({ msg: "user created successfully" }); // Changed status code to 201 for resource creation
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// for get all users
export const getAll = async (req, res) => {
  try {
    const userData = await User.find();
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// to find a single user
export const getOne = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);
    if (!userExist) {
      return res.status(404).json({ msg: "User not found" });
    }
    res.status(200).json(userExist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// for update
export const update = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ msg: "User not found" });
    }
    res.status(200).json({ msg: "User updated" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// for delete
export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);
    if (!userExist) {
      return res.status(404).json({ msg: "User not found" });
    }
    await User.findByIdAndDelete(id);
    res.status(200).json({ msg: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
