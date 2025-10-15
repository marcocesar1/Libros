import type { CreateUserDto } from "../src/domain/dtos/user.dto.js";
import UserUseCases from "../src/domain/usecases/user.usecases.js";
import MockUserRepository from "../src/infra/db_mock/user.mock.repository.js";

const mockRepository = new MockUserRepository();
const userUseCases = new UserUseCases(mockRepository);

describe("User UseCases", () => {
  test("should create a user", async () => {
    const createUserDto: CreateUserDto = {
      name: "New User",
      email: "newuser@example.com",
    };

    const result = await userUseCases.create(createUserDto);

    expect(result.id).toBeDefined();
    expect(result.name).toBe(createUserDto.name);
    expect(result.email).toBe(createUserDto.email);
  });
});
