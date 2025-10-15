import Joi from "joi";

import type { UpdateBookDto } from "../dtos/book.dto.js";

class UpdateBookValidation {
  static validate(input: UpdateBookDto): string | null {
    const schema = Joi.object({
      title: Joi.string(),
      author: Joi.string(),
    });

    const { error } = schema.validate(input, { abortEarly: false });

    return error?.details?.map((err) => err.message).join(", ") ?? null;
  }
}

export default UpdateBookValidation;
