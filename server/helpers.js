import { config } from "https://deno.land/x/dotenv/mod.ts";

const loadEnvirotmentFromEnvFile = async () => {
    if (Deno.env.get("ENV") != undefined) {
      const fileEnv = Deno.cwd() + `/.env.${Deno.env.get("ENV")}`;
      const exists = await (async (filename) => {
        try {
          await Deno.stat(filename);
          return true;
        } catch (e) {
        }
        return false;
      })(fileEnv);
  
      if (exists) {
        config({
          path: Deno.cwd() + `/.env.${Deno.env.get("ENV")}`,
          export: true,
        });
      }
    }
  };

  export { loadEnvirotmentFromEnvFile }