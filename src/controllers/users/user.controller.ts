import { Elysia } from 'elysia';

import { IdParamDTO } from '@dtos/helpers/id-param.dto';
import { CreateUserDTO, UpdateUserDTO } from '@dtos/users';

import {
  createUser,
  deleteUser,
  findUser,
  findUserByEmail,
  listUsers,
  updateUser
} from '@services/users/user.service';

const userController = new Elysia({ prefix: 'users' });

userController.get('/', () => {
  return listUsers();
});

userController.post('/', ({ body }) => {
  return createUser(body);
}, {
  body: CreateUserDTO
});

userController.get('/:id', ({ params }) => {
  return findUser(params.id);
}, {
  params: IdParamDTO
});

userController.get('/get-by-email/:email', ({ params }) => {
  return findUserByEmail(params.email);
});

userController.patch('/:id', ({ body, params }) => {
  return updateUser(params.id, body);
}, {
  params: IdParamDTO,
  body: UpdateUserDTO
});

userController.delete('/:id', ({ params }) => {
  return deleteUser(params.id);
}, {
  params: IdParamDTO
});

export default userController;
