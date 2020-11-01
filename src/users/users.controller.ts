import { Controller, Post, Body, HttpCode, HttpStatus, Get } from '@nestjs/common';
import { userDto } from './dto/create-userDto';
import { UsersService } from './users.service';
import UserType from './interfaces/user.interface';
import HashUtls from '../utils/HashUtls';
import CustomException from '../exceptions/CustomExecption';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  //   @HttpCode(HttpStatus.CREATED)
  //   @Post()
  //   async signUp(@Body() newUser: userDto): Promise<UserType>{
  //       return this.usersService.addUser(newUser);
  //   };
  //
  // @HttpCode(HttpStatus.OK)
  // @Get()
  // async signIn(@Body() attemptedUser: userDto): Promise<UserType>{
  //   const user = await this.usersService.getUserByUsername(attemptedUser.username);
  //   if(user){
  //     const isPasswordCorrect = await HashUtls.comparePassword((attemptedUser.password+process.env.PAPPER), user.password);
  //     if (isPasswordCorrect){
  //       return user;
  //     }
  //   }
  //     throw new CustomException("username or password are wrong", HttpStatus.UNAUTHORIZED);
  // };
}