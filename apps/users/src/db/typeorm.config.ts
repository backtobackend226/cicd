import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'users',
  entities: [`${__dirname}/../domain/**/*.entity{.ts,.js}`],
  migrations: [`${__dirname}/migrations/*{.ts,.js}`],
  extra: { ssl: false },
  synchronize: false,
  migrationsTableName: 'migrations',
});
