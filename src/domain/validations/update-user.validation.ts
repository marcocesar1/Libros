import Joi from "joi";
import type { UpdateUserDto } from "../dtos/user.dto.js";

class UpdateUserValidation {
  static validate(input: UpdateUserDto): string | null {
    const schema = Joi.object({
      name: Joi.string(),
      email: Joi.string().email(),
    });

    const { error } = schema.validate(input, { abortEarly: false });

    return error?.details?.map((err) => err.message).join(", ") ?? null;
  }
}

export default UpdateUserValidation;
