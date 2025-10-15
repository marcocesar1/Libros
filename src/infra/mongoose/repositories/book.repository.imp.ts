import { UserMapper } from "../mappers/user.mapper.js";
import userModel from "../models/user.mongoose.js";
import bookModel from "../models/book.mongoose.js";
import { BookMapper } from "../mappers/book.mapper.js";
import type {
  BookRepository,
  BooksSearch,
} from "../../../domain/repositories/book.respository.js";
import type { Book } from "../../../domain/models/book.model.js";
import type { User } from "../../../domain/models/user.model.js";
import type {
  CreateBookDto,
  UpdateBookDto,
} from "../../../domain/dtos/book.dto.js";

export class BookRepositoryImp implements BookRepository {
  async findAll(query: BooksSearch): Promise<Book[]> {
    const response = await bookModel.find(query);

    return response.map((book) => BookMapper.toDomain(book));
  }

  async findById(id: string): Promise<Book | null> {
    const response = await bookModel.findById(id);

    if (!response) {
      return null;
    }

    return BookMapper.toDomain(response);
  }

  async findByEmail(email: string): Promise<User | null> {
    const response = await userModel.findOne({ email });

    if (!response) {
      return null;
    }

    return UserMapper.toDomain(response);
  }

  async create(input: CreateBookDto): Promise<Book> {
    const response = await bookModel.create(input);

    return BookMapper.toDomain(response);
  }

  async update(id: string, input: UpdateBookDto): Promise<Book | null> {
    const response = await bookModel.findByIdAndUpdate(id, input, {
      new: true,
    });

    if (!response) return null;

    return BookMapper.toDomain(response);
  }

  async delete(id: string): Promise<void> {
    await bookModel.deleteOne({ _id: id });
  }
}
