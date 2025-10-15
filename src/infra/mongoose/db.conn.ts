import mongoose from "mongoose";

class MongoDB {
  async connect(): Promise<void> {
    const mongoUrl = this.getMongoUrl();
    if (!mongoUrl) {
      throw new Error("No se encontró la url de MongoDB");
    }

    await mongoose.connect(mongoUrl);
    console.log("MongoDB connected!");
  }

  private getMongoUrl(): string {
    return process.env.MONGO_URL ?? "";
  }
}

export default MongoDB;
