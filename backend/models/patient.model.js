import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
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
    uId: {
      type: Number,
      required: true,
      unique: true,
      default: null,
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
    otp: {
      type: Number,
      default: null,
    },
    otpExpiry: {
      type: Date,
      default: null,
    },
    //createdAt, updatedAt => Member since <createdAt>
  },
  { timestamps: true }
);
