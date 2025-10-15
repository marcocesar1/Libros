import type {
  CreateUserDto,
  UpdateUserDto,
} from "../../../domain/dtos/user.dto.js";
import type { User } from "../../../domain/models/user.model.js";
import type { UserRepository } from "../../../domain/repositories/user.respository.js";
import { UserMapper } from "../mappers/user.mapper.js";
import userModel from "../models/user.mongoose.js";

export class UserRepositoryImp implements UserRepository {
  async findAll(): Promise<User[]> {
    return await userModel.find({});
  }

  async findById(id: string): Promise<User | null> {
    const response = await userModel.findById(id);

    if (!response) {
      return null;
    }

    return UserMapper.toDomain(response);
  }

  async findByEmail(email: string): Promise<User | null> {
    const response = await userModel.findOne({ email });

    if (!response) {
      return null;
    }

    return UserMapper.toDomain(response);
  }

  async create(input: CreateUserDto): Promise<User> {
    const response = await userModel.create(input);

    return UserMapper.toDomain(response);
  }

  async update(id: string, input: UpdateUserDto): Promise<User | null> {
    const response = await userModel.findByIdAndUpdate(id, input, {
      new: true,
    });

    if (!response) return null;

    return UserMapper.toDomain(response);
  }

  async delete(id: string): Promise<void> {
    await userModel.deleteOne({ _id: id });
  }
}
