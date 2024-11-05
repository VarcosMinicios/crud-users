import { t } from 'elysia';

export const UpdateUserDTO = t.Object({
  name: t.Optional(t.String()),
  email: t.Optional(t.String()),
  password: t.Optional(t.String())
});
