import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { userDto } from '../users/dto/create-userDto';
import UserType from '../users/interfaces/user.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @HttpCode(HttpStatus.CREATED)
  @Post()
  async signUp(@Body() newUser: userDto): Promise<UserType>{
    return this.authService.signUp(newUser);
  }
}
