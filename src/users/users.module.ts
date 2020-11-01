import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersController } from './users.controller';
import { User } from './users.model';
import { UsersService } from './users.service';
import { ConfigModule } from '@nestjs/config';


@Module({
    imports: [SequelizeModule.forFeature([User]), ConfigModule],
    providers: [UsersService],
    controllers: [UsersController],
    exports: [SequelizeModule]
  })
export class UsersModule {}
