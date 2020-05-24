import { bootstrap } from "./server/index.js";

await bootstrap((router, app) => {
  router.get("/", ({ params, request, response }) => {
    console.log('OK request!')
    response.status = 200;
    response.body = {
      OK: true,
      message: "API with deno / ES6 🦕.",
    };
  });
},{});
