import mongoose from "mongoose";
import type { User } from "../../../domain/models/user.model.js";

const userSchema = new mongoose.Schema<User>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);

export default userSchema;
