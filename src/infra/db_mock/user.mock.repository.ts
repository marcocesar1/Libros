import type {
  CreateUserDto,
  UpdateUserDto,
} from "../../domain/dtos/user.dto.js";
import type { User } from "../../domain/models/user.model.js";
import type { UserRepository } from "../../domain/repositories/user.respository.js";

class MockUserRepository implements UserRepository {
  private users: User[] = [
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "2",
      name: "Jane Doe",
      email: "jane@example.com",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  findAll(): Promise<User[]> {
    return Promise.resolve(this.users);
  }

  findById(id: string): Promise<User | null> {
    return Promise.resolve(this.users.find((user) => user.id === id) || null);
  }

  findByEmail(email: string): Promise<User | null> {
    return Promise.resolve(
      this.users.find((user) => user.email === email) || null
    );
  }

  create(input: CreateUserDto): Promise<User> {
    const newUser: User = {
      id: String(Math.random()),
      name: input.name,
      email: input.email,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.users.push(newUser);

    return Promise.resolve(newUser);
  }

  update(id: string, input: UpdateUserDto): Promise<User | null> {
    const user = this.users.find((user) => user.id === id);

    if (!user) {
      return Promise.resolve(null);
    }

    user.name = input.name ? input.name : user.name;
    user.email = input.email ? input.email : user.email;
    user.updatedAt = new Date();

    return Promise.resolve(user);
  }

  delete(id: string): Promise<void> {
    this.users = this.users.filter((user) => user.id !== id);

    return Promise.resolve();
  }
}

export default MockUserRepository;
