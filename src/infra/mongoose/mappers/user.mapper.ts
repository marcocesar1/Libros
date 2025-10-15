import type { HydratedDocument } from "mongoose";
import type { User } from "../../../domain/models/user.model.js";

export class UserMapper {
  static toDomain(user: HydratedDocument<User>): User {
    return {
      id: user._id.toString(),
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
}

export default UserMapper;
