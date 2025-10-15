import Server from "./infra/server/apollo.js";
import MongoDB from "./infra/mongoose/db.conn.js";

const mongo = new MongoDB();
const server = new Server();

async function main() {
  await mongo.connect();
  server.start();
}

main().catch(console.error);
