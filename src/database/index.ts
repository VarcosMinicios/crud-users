import { type Options, type EntityManager, type EntityRepository, MikroORM } from '@mikro-orm/mysql';
import { User } from '@src/database/users/user.entity';
import config from '@src/mikro-orm.config';

export interface Services {
  orm: MikroORM;
  em: EntityManager;
  user: EntityRepository<User>;
}

let cache: Services;

export async function initORM(options?: Options): Promise<Services> {
  if (cache) {
    return cache;
  }

  const orm = await MikroORM.init({
    ...config,
    ...options,
  });

  return cache = {
    orm,
    em: orm.em,
    user: orm.em.getRepository(User),
  };
}
