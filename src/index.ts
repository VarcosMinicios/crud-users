import { Elysia } from "elysia";
import { RequestContext, Utils, wrap } from "@mikro-orm/core";
import { initORM } from "@repositories/index";

export const db = await initORM();

const app = new Elysia().get("/", () => "Hello Elysia");
app.on('beforeHandle', () => RequestContext.enter(db.em));
app.on('afterHandle', ({ response }) => Utils.isEntity(response) ? wrap(response).toObject() : response);

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
