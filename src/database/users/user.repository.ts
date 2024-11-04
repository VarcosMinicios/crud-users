import { wrap } from '@mikro-orm/core';

import type { CreateUser, User } from '@src/types/users/user.types';
import { db } from '@src/index';

export class UserRepository {
  public async create(data: CreateUser): Promise<User> {
    const user = db.user.create(data);
    await db.em.flush();

    return user;
  }

  public async list(): Promise<User[]> {
    return db.user.findAll();
  }

  public async find(id: number): Promise<User | null> {
    return db.user.findOneOrFail(id);
  }

  public async findByEmail(email: string): Promise<User | null> {
    return db.user.findOneOrFail({ email });
  }

  public async update(id: number, data: Partial<CreateUser>): Promise<User> {
    const user = await db.user.findOneOrFail(id);
    wrap(user).assign(data);

    await db.em.flush();

    return user;
  }

  public async delete(id: number): Promise<User> {
    const user = await db.user.findOneOrFail(id);
    await db.em.removeAndFlush(user);

    return user;
  }
}
