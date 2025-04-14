import express from "express";

import validateUser  from "../middleware/validateUser.js";

import {
  getAllUsers,
  getUserByID,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

const router = express.Router();

// GET all users
router.get("/users", getAllUsers);

// GET a specific user by ID
router.get("/users/:id", getUserByID);

// POST a new user
router.post("/user", validateUser, createUser);

// PUT (update) an existing user
router.put("/user/:id", validateUser, updateUser);

// DELETE a user
router.delete("/user/:id", deleteUser);

export default router;
