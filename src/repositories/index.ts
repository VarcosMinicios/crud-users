import { type Options, type EntityManager, MikroORM } from '@mikro-orm/mysql';
import config from 'src/mikro-orm.config.js';

export interface Services {
  orm: MikroORM;
  em: EntityManager;
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
  };
}
