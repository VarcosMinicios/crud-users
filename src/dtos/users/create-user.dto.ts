import { t } from 'elysia';

export const CreateUserDTO = t.Object({
  name: t.String(),
  email: t.String(),
  password: t.String()
});

export type CreateUser = typeof CreateUserDTO.static;
