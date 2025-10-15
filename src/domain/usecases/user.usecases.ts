import type { CreateUserDto, UpdateUserDto } from "../dtos/user.dto.js";
import InvalidData from "../errors/invalid-data.js";
import NotFound from "../errors/not-found.error.js";
import type { User } from "../models/user.model.js";
import type { UserRepository } from "../repositories/user.respository.js";
import CreateUserValidation from "../validations/create-user.validation.js";
import UpdateUserValidation from "../validations/update-user.validation.js";

class UserUseCases {
  constructor(private userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async findById(id: string): Promise<User> {
    const data = await this.userRepository.findById(id);

    if (!data) {
      throw new NotFound(`No se encontró el usuario con id ${id}`);
    }

    return data;
  }

  findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  async create(input: CreateUserDto): Promise<User> {
    const inputErrors = CreateUserValidation.validate(input);
    if (inputErrors) {
      throw new InvalidData(inputErrors);
    }

    const emailExist = await this.userRepository.findByEmail(input.email);
    if (emailExist) {
      throw new InvalidData(`El email ${input.email} ya existe`);
    }

    return this.userRepository.create(input);
  }

  async update(id: string, input: UpdateUserDto): Promise<User> {
    const inputErrors = UpdateUserValidation.validate(input);
    if (inputErrors) {
      throw new InvalidData(inputErrors);
    }

    if (input.email) {
      const userExist = await this.userRepository.findByEmail(input.email);
      if (userExist && userExist.id !== id) {
        throw new InvalidData(
          `El email ${input.email} ya se encuentra asociado a otro usuario`
        );
      }
    }

    const user = await this.userRepository.update(id, input);
    if (!user) {
      throw new NotFound(`No se encontró el usuario con id ${id}`);
    }

    return user;
  }

  async delete(id: string): Promise<User> {
    const user = await this.findById(id);

    await this.userRepository.delete(id);

    return user;
  }
}

export default UserUseCases;
