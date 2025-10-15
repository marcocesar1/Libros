import mongoose from "mongoose";
import userSchema from "../schemas/user.schema.js";

const user = mongoose.model("User", userSchema);

export default user;
