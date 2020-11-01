import { Injectable, Logger } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { userDto } from '../users/dto/create-userDto';
import jwt from 'jsonwebtoken';
import UserType from '../users/interfaces/user.interface';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService, private configService: ConfigService) {}

  public async signUp(newUser: userDto): Promise<UserType>{
    const createdUser = await this.usersService.addUser(newUser);
    createdUser.token = this.generateToken(createdUser);

    return createdUser;
  };

  private generateToken(user: UserType): string{
    Logger.log(`generating a jwt token for user ${user.username}`);
    return jwt.sign({ user },  this.configService.get<string>("TOKEN_SECRET"), { expiresIn: this.configService.get<string>("TOKEN_EXPIRES_TIME")});
  }
}
