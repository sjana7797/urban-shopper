import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { logger } from "hono/logger";

const app = new Hono();

app.use(logger());

app.get("/health", (c) => {
  return c.text("Resource is running");
});

app.use("/*", serveStatic({ root: "../../temp-data/resources" }));

export default {
  port: 8000,
  fetch: app.fetch,
};
