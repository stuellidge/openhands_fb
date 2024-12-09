import { Options } from '@mikro-orm/core';
import { MySqlDriver } from '@mikro-orm/mysql';

import dotenv from 'dotenv';
dotenv.config();

const env = process.env.NODE_ENV || 'development';

const dbConfig = {
  development: {
    dbName: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
  },
  test: {
    dbName: process.env.DB_NAME_TEST,
    user: process.env.DB_USER_TEST,
    password: process.env.DB_PASSWORD_TEST,
    host: process.env.DB_HOST_TEST,
    port: Number(process.env.DB_PORT_TEST),
  },
  production: {
    dbName: process.env.DB_NAME_PROD,
    user: process.env.DB_USER_PROD,
    password: process.env.DB_PASSWORD_PROD,
    host: process.env.DB_HOST_PROD,
    port: Number(process.env.DB_PORT_PROD),
  },
};

const config: Options<MySqlDriver> = {
  entities: ['./dist/entities'],
  entitiesTs: ['./src/entities'],
  type: 'mysql',
  debug: true,
  ...dbConfig[env],
};

export default config;