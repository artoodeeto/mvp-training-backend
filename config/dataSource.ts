import { DataSource } from 'typeorm';
import { dataBaseConfig } from './database';

// export const AppDataSource = new DataSource({
//   type: 'mysql',
//   host: 'localhost',
//   port: 3306,
//   username: process.env.DATABASE_USER,
//   password: process.env.DATABASE_PASSWORD,
//   database: process.env.DATABASE_NAME,
//   migrations: ['../db/migrations/*.ts'],
//   synchronize: false,
// });

export const AppDataSource = new DataSource(dataBaseConfig);

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });
