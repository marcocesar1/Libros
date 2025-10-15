import mongoose from "mongoose";

async function main() {
  await mongoose.connect(
    "mongodb://root:password@127.0.0.1:27018/biblioteca?authSource=admin"
  );
  console.log("MongoDB connected!");
}

main().catch(console.error);
