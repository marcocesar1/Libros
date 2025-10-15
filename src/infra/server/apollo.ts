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
    const port = this.getPort();

    this.server.listen({ port }).then(({ url }) => {
      console.log(`Server running at ${url}`);
    });
  }

  private getPort() {
    return process.env.SERVER_PORT ?? 4000;
  }
}

export default Server;
