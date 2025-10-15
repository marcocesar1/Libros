import type { Book } from "../models/book.model.js";
import type { CreateBookDto, UpdateBookDto } from "../dtos/book.dto.js";

export interface BooksSearch {
  userId?: string;
}

export interface BookRepository {
  findAll(query: BooksSearch): Promise<Book[]>;
  findById(id: string): Promise<Book | null>;
  create(input: CreateBookDto): Promise<Book>;
  update(id: string, input: UpdateBookDto): Promise<Book | null>;
  delete(id: string): Promise<void>;
}
