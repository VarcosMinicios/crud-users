import { Options, MySqlDriver } from '@mikro-orm/mysql';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';

const config: Options = {
  driver: MySqlDriver,
  dbName: 'mikro_orm_test',
  user: 'root',
  password: 'root',
  entities: ['dist/**/*.entity.js'],
  entitiesTs: ['src/**/*.entity.ts'],
  metadataProvider: TsMorphMetadataProvider,
  debug: true,
};

export default config;
