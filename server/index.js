import { Application } from "https://deno.land/x/oak/mod.ts";
import { Router } from "https://deno.land/x/oak/mod.ts";
import { loadEnvirotmentFromEnvFile } from "./helpers.js";

const bootstrap = async (run, {}) => {
  await loadEnvirotmentFromEnvFile();
  
  const env = Deno.env.toObject();
  console.log(env)
  const app = new Application();

  const APP_HOST = '0.0.0.0';
  const APP_PORT = env.PORT || 3000;

  const router = new Router();
  router.get("/alive", ({ params, request, response }) => {
    response.status = 200;
    response.body = {
      OK: true,
    };
  });

  run(router, app);

  app.use(router.routes());
  app.use(router.allowedMethods());

  console.log(`Listen on ${APP_HOST}:${APP_PORT}`);

  await app.listen(`${APP_HOST}:${APP_PORT}`);
};

export { bootstrap }
