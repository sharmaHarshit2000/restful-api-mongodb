import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String, // Type must be string
      required: [true, "First name is required."],
      trim: true, // Removes the whiteSpace form the value
    },
    lastName: {
      type: String,
      required: [true, "Last name is required."],
      trim: true,
    },
    hobby: {
      type: String,
      required: [true, "Hobby is required."],
      trim: true,
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt value
);

const userModel = mongoose.model("User", userSchema); // Creates a model for the Schema

export default userModel;
