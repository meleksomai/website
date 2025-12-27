import { createCatchAllEmailResolver, routeAgentEmail } from "agents";

// biome-ignore lint/performance/noBarrelFile: required
export { HelloEmailAgent } from "./agent";

export default {
  async email(message: ForwardableEmailMessage, env: Env) {
    await routeAgentEmail(message, env, {
      resolver: createCatchAllEmailResolver("HelloEmailAgent", message.from),
    });
  },

  async fetch(request: Request, env: Env) {
    return new Response("Email Service is running.");
  },
};
