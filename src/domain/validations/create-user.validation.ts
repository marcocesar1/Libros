import Joi from "joi";
import type { CreateUserDto } from "../dtos/user.dto.js";

class CreateUserValidation {
  static validate(input: CreateUserDto): string | null {
    const schema = Joi.object({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
    });

    const { error } = schema.validate(input, { abortEarly: false });

    return error?.details?.map((err) => err.message).join(", ") ?? null;
  }
}

export default CreateUserValidation;
