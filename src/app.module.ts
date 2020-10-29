import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import conectionOptions from './database/connectionOptions';

@Module({
  imports: [SequelizeModule.forRoot(conectionOptions), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

