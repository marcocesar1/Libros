import mongoose, { Schema } from "mongoose";
import type { Book } from "../../../domain/models/book.model.js";

const bookSchema = new mongoose.Schema<
  Omit<Book, "userId"> & { userId: mongoose.Types.ObjectId }
>(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

export default bookSchema;
