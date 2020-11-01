import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { Dialect } from 'sequelize/types';
// import { User } from 'src/users/users.model';


  export default (dialect: Dialect, host: string, port: number, username: string, password: string, database: string): SequelizeModuleOptions => ({
    dialect,
    host,
    port,
    username,
    password,
    database,
    autoLoadModels: true,
    synchronize: true,
  });