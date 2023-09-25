import 'dotenv/config';
import { DataSourceOptions } from 'typeorm';

export const dataBaseConfig: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  migrations: ['dist/db/migrations/*.js'],
  entities: ['dist/src/**/*.entity.js'],
  logging: true,
  synchronize: false,
};
