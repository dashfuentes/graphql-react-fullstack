import { server } from "./server";
import "./database";

server.start({ port: process.env.PORT || 5000 }, ({ port }) => {
  console.log("Server on port", port);
});
