import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { userDto } from './dto/create-userDto';
import { UsersService } from './users.service';
import UserType from './interfaces/user.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  
    @HttpCode(HttpStatus.CREATED)
    @Post()
    addUser(@Body() newUser: userDto): Promise<UserType>{
        return this.usersService.addUser(newUser);
    };
}