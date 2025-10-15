import type { CreateUserDto, UpdateUserDto } from "../dtos/user.dto.js";
import type { User } from "../models/user.model.js";

export interface UserRepository {
  findAll(): Promise<User[]>;
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  create(input: CreateUserDto): Promise<User>;
  update(id: string, input: UpdateUserDto): Promise<User | null>;
  delete(id: string): Promise<void>;
}
