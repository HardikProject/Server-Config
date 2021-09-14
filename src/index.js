// ESM Specific Stuff
import { fileURLToPath } from "url";
import path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import './env.js'
//Fastify File
import fastify from "fastify";
import fastifyStatic from "fastify-static";
import fastifyCors from "fastify-cors";
import fastifyCookie from "fastify-cookie";

const app = fastify();

async function startApp() {
  try {
    app.register(fastifyStatic, {
      root: path.join(__dirname, "public"),
    });
    app.register(fastifyCors, {
        origin: [/\.qr-code.app/, "https://qr-code.app"],
        credentials: true,
      });
      app.register(fastifyCookie, {
        secret: process.env.COOKIE_SIGNATURE,
      });
    await app.listen(process.env.PORT);
    console.log("🚀🚀");
  } catch (error) {
    console.error(error);
  }
}

startApp();
