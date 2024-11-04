import { Elysia, t } from 'elysia';
import { createUser, deleteUser, findUser, findUserByEmail, listUsers, updateUser } from '@services/users/user.service';

const userController = new Elysia({ prefix: 'users' });

userController.get('/', () => {
  return listUsers();
});

userController.post('/', ({ body }) => {
  return createUser(body);
}, {
  body: t.Object({
    name: t.String(),
    email: t.String(),
    password: t.String()
  })
});

userController.get('/:id', ({ params }) => {
  return findUser(params.id);
}, {
  params: t.Object({
    id: t.Number()
  })
});

userController.get('/get-by-email/:email', ({ params }) => {
  return findUserByEmail(params.email);
});

userController.patch('/:id', ({ body, params }) => {
  return updateUser(params.id, body);
}, {
  params: t.Object({
    id: t.Number()
  }),
  body: t.Object({
    name: t.Optional(t.String()),
    email: t.Optional(t.String()),
    password: t.Optional(t.String())
  })
});

userController.delete('/:id', ({ params }) => {
  return deleteUser(params.id);
}, {
  params: t.Object({
    id: t.Number()
  })
});

export default userController;
