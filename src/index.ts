import { Elysia } from 'elysia';
import { RequestContext, Utils, wrap } from '@mikro-orm/core';

import { initORM } from '@src/database';
import userController from '@src/controllers/users/user.controller';

export const db = await initORM();

const app = new Elysia();

// LifeCycle handlers
app.onBeforeHandle(() => RequestContext.enter(db.em));
app.onAfterHandle(({ response }) => Utils.isEntity(response) ? wrap(response).toObject() : response);
app.onTransform(function log({ body, params, path, request: { method } }) {
  console.log(`${method} ${path}`, {
    body,
    params
  });
});

// Routes
app.use(userController);

app.listen(3000);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
