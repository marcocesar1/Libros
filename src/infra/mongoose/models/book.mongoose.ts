import mongoose from "mongoose";
import bookSchema from "../schemas/book.schema.js";

const book = mongoose.model("Book", bookSchema);

export default book;
