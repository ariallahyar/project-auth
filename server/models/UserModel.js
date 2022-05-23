import mongoose from "mongoose";
import crypto from "crypto";

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true
  }, 
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString("hex")
  }
});

module.exports = mongoose.model("User", UserSchema);