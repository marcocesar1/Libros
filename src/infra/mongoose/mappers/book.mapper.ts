import mongoose, { type HydratedDocument } from "mongoose";
import type { Book } from "../../../domain/models/book.model.js";

export class BookMapper {
  static toDomain(
    book: HydratedDocument<
      Omit<Book, "userId"> & { userId: mongoose.Types.ObjectId }
    >
  ): Book {
    return {
      id: book._id.toString(),
      title: book.title,
      author: book.author,
      userId: book.userId.toString(),
      createdAt: book.createdAt,
      updatedAt: book.updatedAt,
    };
  }
}

export default BookMapper;
