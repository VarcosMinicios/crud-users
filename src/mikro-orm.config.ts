import { Options, MySqlDriver } from '@mikro-orm/mysql';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { Migrator } from '@mikro-orm/migrations';

const config: Options = {
  driver: MySqlDriver,
  dbName: 'mikro_orm_test',
  extensions: [ Migrator ],
  user: 'root',
  password: 'root',
  entities: [ 'dist/**/*.entity.js' ],
  entitiesTs: [ 'src/**/*.entity.ts' ],
  metadataProvider: TsMorphMetadataProvider,
  debug: true,
};

export default config;
