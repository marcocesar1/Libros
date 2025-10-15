import Joi from "joi";
import mongoose from "mongoose";

import type { CreateBookDto } from "../dtos/book.dto.js";

export const objectIdValidator = Joi.string().custom((value, helpers) => {
  if (!mongoose.Types.ObjectId.isValid(value)) {
    return helpers.error("any.invalid");
  }
  return value;
}, "ObjectId validation");

class CreateBookValidation {
  static validate(input: CreateBookDto): string | null {
    const schema = Joi.object({
      title: Joi.string().required(),
      author: Joi.string().required(),
      userId: objectIdValidator.required(),
    });

    const { error } = schema.validate(input, { abortEarly: false });

    return error?.details?.map((err) => err.message).join(", ") ?? null;
  }
}

export default CreateBookValidation;
