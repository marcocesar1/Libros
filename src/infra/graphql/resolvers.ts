import mongoose from "mongoose";
import type {
  CreateUserDto,
  UpdateUserDto,
} from "../../domain/dtos/user.dto.js";
import UserUseCases from "../../domain/usecases/user.usecases.js";
import { UserRepositoryImp } from "../mongoose/repositories/user.repository.imp.js";
import { BookRepositoryImp } from "../mongoose/repositories/book.repository.imp.js";
import BookUseCases from "../../domain/usecases/book.usecases.js";
import type {
  CreateBookDto,
  UpdateBookDto,
} from "../../domain/dtos/book.dto.js";

const userRepository = new UserRepositoryImp();
const bookRepository = new BookRepositoryImp();

const userUseCases = new UserUseCases(userRepository);
const bookUseCases = new BookUseCases(userRepository, bookRepository);

const resolvers = {
  Query: {
    user: async (_: any, { id }: { id: mongoose.Types.ObjectId }) => {
      return userUseCases.findById(id.toString());
    },
    users: async (_: any) => {
      return userUseCases.findAll();
    },
    userBooks: async (
      _: any,
      { userId }: { userId: mongoose.Types.ObjectId }
    ) => {
      return bookUseCases.findAllUserBooks(userId.toString());
    },
  },
  Mutation: {
    createUser: async (_: any, { input }: { input: CreateUserDto }) => {
      return userUseCases.create(input);
    },
    updateUser: async (
      _: any,
      { id, input }: { id: mongoose.Types.ObjectId; input: UpdateUserDto }
    ) => {
      return userUseCases.update(id.toString(), input);
    },
    deleteUser: async (_: any, { id }: { id: mongoose.Types.ObjectId }) => {
      return userUseCases.delete(id.toString());
    },
    createBook: async (_: any, { input }: { input: CreateBookDto }) => {
      return bookUseCases.create(input);
    },
    updateBook: async (
      _: any,
      { id, input }: { id: mongoose.Types.ObjectId; input: UpdateBookDto }
    ) => {
      return bookUseCases.update(id.toString(), input);
    },
    deleteBook: async (_: any, { id }: { id: mongoose.Types.ObjectId }) => {
      return bookUseCases.delete(id.toString());
    },
  },
};

export default resolvers;
