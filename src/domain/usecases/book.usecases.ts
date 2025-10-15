import type { CreateBookDto, UpdateBookDto } from "../dtos/book.dto.js";
import InvalidData from "../errors/invalid-data.js";
import NotFound from "../errors/not-found.error.js";
import type { Book } from "../models/book.model.js";
import type { BookRepository } from "../repositories/book.respository.js";
import type { UserRepository } from "../repositories/user.respository.js";
import CreateBookValidation from "../validations/create-book.validation.js";
import UpdateBookValidation from "../validations/update-book.validation.js";

class BookUseCases {
  constructor(
    private userRepository: UserRepository,
    private bookRepository: BookRepository
  ) {
    this.userRepository = userRepository;
  }

  async findById(id: string): Promise<Book> {
    const data = await this.bookRepository.findById(id);

    if (!data) {
      throw new NotFound(`No se encontró el libro con id ${id}`);
    }

    return data;
  }

  findAllUserBooks(userId: string): Promise<Book[]> {
    return this.bookRepository.findAll({
      userId,
    });
  }

  async create(input: CreateBookDto): Promise<Book> {
    const inputErrors = CreateBookValidation.validate(input);
    if (inputErrors) {
      throw new InvalidData(inputErrors);
    }

    const userExist = await this.userRepository.findById(input.userId);
    if (!userExist) {
      throw new NotFound(`No se encontró el usuario con id ${input.userId}`);
    }

    return this.bookRepository.create(input);
  }

  async update(id: string, input: UpdateBookDto): Promise<Book> {
    const inputErrors = UpdateBookValidation.validate(input);
    if (inputErrors) {
      throw new InvalidData(inputErrors);
    }

    const book = await this.bookRepository.update(id, input);
    if (!book) {
      throw new NotFound(`No se encontró el libro con id ${id}`);
    }

    return book;
  }

  async delete(id: string): Promise<Book> {
    const user = await this.findById(id);

    await this.bookRepository.delete(id);

    return user;
  }
}

export default BookUseCases;
