import { Options } from '@mikro-orm/core';
import { MySqlDriver } from '@mikro-orm/mysql';

const config: Options<MySqlDriver> = {
  entities: ['./dist/entities'],
  entitiesTs: ['./src/entities'],
  dbName: 'foodbank',
  type: 'mysql',
  user: 'root',
  password: 'password',
  host: 'localhost',
  port: 3306,
  debug: true,
};

export default config;