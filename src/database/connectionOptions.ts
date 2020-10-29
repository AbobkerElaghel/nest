import { SequelizeModuleOptions } from '@nestjs/sequelize';
// import { User } from 'src/users/users.model';

const conectionOptions: SequelizeModuleOptions =  {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'qweqweqwe',
    database: 'besTtodoEver',
    autoLoadModels: true,
    synchronize: true,
  };

  export default conectionOptions;