import type { CreateUser } from '@customTypes/users/user.types';
import { UserRepository } from '@src/database/users/user.repository';

const userRepository = new UserRepository();

export const listUsers = async () => {
  return userRepository.list();
}

export const createUser = async (data: CreateUser) => {
  data.password = await hashPassword(data.password);

  return userRepository.create(data);
}

export const findUser = async (id: number) => {
  return userRepository.find(id);
}

export const findUserByEmail = async (email: string) => {
  return userRepository.findByEmail(email);
}

export const updateUser = async (id: number, data: Partial<CreateUser>) => {
  if (data.password) data.password = await hashPassword(data.password);

  return userRepository.update(id, data);
}

export const deleteUser = async (id: number) => {
  return userRepository.delete(id);
}

const hashPassword = async (password?: string) => {
  if (!password) {
    throw new Error('Password is required');
  }

  return Bun.password.hash(password);
}
