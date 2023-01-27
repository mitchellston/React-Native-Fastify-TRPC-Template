import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";
import fastify from "fastify";
import { createContext } from "./context";
import { appRouter } from "./routers/_main";
const server = fastify({
  maxParamLength: 5000,
});
server.register(fastifyTRPCPlugin, {
  prefix: "/api",
  trpcOptions: { router: appRouter, createContext },
});

server.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server is now listening on ${address}`);
});
