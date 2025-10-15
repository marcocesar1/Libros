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

  test("should find all users", async () => {
    const result = await userUseCases.findAll();

    expect(result.length).toBe(3);
  });

  test("should find a user by id", async () => {
    const result = await userUseCases.findById("1");

    expect(result.id).toBe("1");
  });

  test("should update a user", async () => {
    const updateUserDto: CreateUserDto = {
      name: "Updated User",
      email: "updateduser@example.com",
    };

    const result = await userUseCases.update("1", updateUserDto);

    expect(result.name).toBe(updateUserDto.name);
    expect(result.email).toBe(updateUserDto.email);
  });

  test("should delete a user", async () => {
    const result = await userUseCases.delete("1");

    expect(result.id).toBe("1");
  });
});
