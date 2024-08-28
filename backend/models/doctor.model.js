import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 8,
      select: false,
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female", "other"],
    },
    profilePic: {
      type: String,
      default: "",
    },
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // Ensure email uniqueness
    },
    experience: {
        type: Number,
        required: true,
    }
    //createdAt, updatedAt => Member since <createdAt>
  },
  { timestamps: true }
);
