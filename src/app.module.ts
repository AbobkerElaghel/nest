import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import connectionOptions from './options/connectionOptions';
import { ConfigModule } from '@nestjs/config';
import getEnvPath from './utils/getEnvPath';
import { Dialect } from 'sequelize/types';
import { AuthModule } from './auth/auth.module';
import { TodoController } from './todo/todo.controller';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: getEnvPath()
  }), SequelizeModule.forRoot(connectionOptions(<Dialect>process.env.DATABASE_DIALECT, process.env.LINK,+process.env.DATABASE_PORT_NUMBER,process.env.DATABASE_USERNAME,process.env.DATABASE_PASSWORD,process.env.DATABASE_NAME)), UsersModule, AuthModule, TodoModule],
  controllers: [AppController, TodoController],
  providers: [AppService],
})
export class AppModule {}

