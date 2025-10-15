import { ApolloServer } from "apollo-server";

import typeDefs from "../graphql/schema.js";
import resolvers from "../graphql/resolvers.js";

class Server {
  server: ApolloServer;

  constructor() {
    this.server = new ApolloServer({
      typeDefs: typeDefs,
      resolvers: resolvers,
    });
  }

  start() {
    this.server.listen({ port: 4000 }).then(({ url }) => {
      console.log(`Server running at ${url}`);
    });
  }
}

export default Server;
