import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  hobby: {
    type: String,
    required: true,
    trim: true,
  },
});

const userModel = mongoose.model("User", userSchema)

export default userModel;