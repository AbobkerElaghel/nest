import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersService } from '../users/users.service';
import { ConfigService } from '@nestjs/config';
import { UsersModule } from '../users/users.module';
import {JwtModule} from '@nestjs/jwt'
@Module({
  imports: [UsersModule, JwtModule.register({})],
  providers: [AuthService, UsersService, ConfigService],
  controllers: [AuthController]
})
export class AuthModule {
}
