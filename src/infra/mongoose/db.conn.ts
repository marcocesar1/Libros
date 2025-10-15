import mongoose from "mongoose";

class MongoDB {
  async connect(): Promise<void> {
    await mongoose.connect(
      "mongodb://root:password@127.0.0.1:27018/biblioteca?authSource=admin"
    );
    console.log("MongoDB connected!");
  }
}

export default MongoDB;
