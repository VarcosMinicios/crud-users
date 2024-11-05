import type { CreateUser } from '@dtos/users';
import { UserRepository } from '@src/database/users/user.repository';
import { User } from '@src/types/users/user.types';

const userRepository = new UserRepository();

export const listUsers = async (): Promise<User[]> => {
  return userRepository.list();
}

export const createUser = async (data: CreateUser): Promise<User> => {
  data.password = await hashPassword(data.password);

  return userRepository.create(data);
}

export const findUser = async (id: number): Promise<User> => {
  return userRepository.find(id);
}

export const findUserByEmail = async (email: string): Promise<User> => {
  return userRepository.findByEmail(email);
}

export const updateUser = async (id: number, data: Partial<CreateUser>): Promise<User> => {
  if (data.password) data.password = await hashPassword(data.password);

  return userRepository.update(id, data);
}

export const deleteUser = async (id: number): Promise<User> => {
  return userRepository.delete(id);
}

const hashPassword = async (password?: string): Promise<string> => {
  if (!password) {
    throw new Error('Password is required');
  }

  return Bun.password.hash(password);
}
