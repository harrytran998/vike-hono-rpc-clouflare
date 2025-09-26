import "dotenv/config";
import { authjsHandler, authjsSessionMiddleware } from "./server/authjs-handler";
import { dbMiddleware } from "./server/db-middleware";
import { vikeHandler } from "./server/vike-handler";
import { trpcHandler } from "./server/trpc-handler";
import { createHandler, createMiddleware } from "@universal-middleware/hono";
import { Hono } from "hono";

const app = new Hono();

app.use(createMiddleware(dbMiddleware)());

app.use(createMiddleware(authjsSessionMiddleware)());

/**
 * Auth.js route
 * @link {@see https://authjs.dev/getting-started/installation}
 **/
app.use("/api/auth/**", createHandler(authjsHandler)());

app.use("/api/trpc/*", createHandler(trpcHandler)("/api/trpc"));

/**
 * Vike route
 *
 * @link {@see https://vike.dev}
 **/
app.all("*", createHandler(vikeHandler)());

export default app;
