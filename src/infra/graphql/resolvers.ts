import mongoose from "mongoose";
import type {
  CreateUserDto,
  UpdateUserDto,
} from "../../domain/dtos/user.dto.js";
import UserUseCases from "../../domain/usecases/user.usecases.js";
import { UserRepositoryImp } from "../mongoose/repositories/user.repository.imp.js";

const userRepository = new UserRepositoryImp();

const userUseCases = new UserUseCases(userRepository);

const resolvers = {
  Query: {
    user: async (_: any, { id }: { id: mongoose.Types.ObjectId }) => {
      return userUseCases.findById(id.toString());
    },
    users: async (_: any) => {
      return userUseCases.findAll();
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
  },
};

export default resolvers;
