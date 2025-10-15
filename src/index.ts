import mongoose from "mongoose";
import { ApolloServer } from "apollo-server";

import typeDefs from "./infra/graphql/schema.js";
import resolvers from "./infra/graphql/resolvers.js";

async function main() {
  await mongoose.connect(
    "mongodb://root:password@127.0.0.1:27018/biblioteca?authSource=admin"
  );
  console.log("MongoDB connected!");

  const server = new ApolloServer({ typeDefs, resolvers });

  const { url } = await server.listen({ port: 4000 });
  console.log(`Server running at ${url}`);
}

main().catch(console.error);
