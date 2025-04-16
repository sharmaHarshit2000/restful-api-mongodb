import User from "../models/User.js";

// GET all users
export const getAllUsers = async (req, res) => {
  try {
  
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Server error while fetching users." });
  }
};

// GET user by ID
export const getUserByID = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res
        .status(404)
        .json({ message: `No user found with ID: ${req.params.id}` });
    }

    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ message: "Invalid user ID, Please enter a valid user ID." });
  }
};

// POST create new user
export const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({
      message: "User created successfully.",
      user: newUser,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// PUT update user
export const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedUser) {
      return res
        .status(404)
        .json({ message: `No user found with ID: ${req.params.id}` });
    }

    res.status(200).json({
      message: "User updated successfully.",
      user: updatedUser,
    });
  } catch (err) {
    res.status(400).json({ message: "Invalid user ID, Please enter a valid user ID." });
  }
};

// DELETE user
export const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);

    if (!deletedUser) {
      return res
        .status(404)
        .json({ message: `No user found with ID: ${req.params.id}` });
    }

    res.status(200).json({
      message: "User deleted successfully.",
      user: deletedUser,
    });
  } catch (err) {
    res.status(400).json({ message: "Invalid user ID, Please enter a valid user ID." });
  }
};
