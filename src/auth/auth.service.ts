import { HttpStatus, Injectable, Logger } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { userDto } from '../users/dto/create-userDto';
import UserType from '../users/interfaces/user.interface';
import { ConfigService } from '@nestjs/config';
import HashUtls from '../utils/HashUtls';
import CustomException from '../exceptions/CustomExecption';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService, private configService: ConfigService, private readonly jwtService: JwtService) {}

  public async signUp(newUser: userDto): Promise<UserType>{
    // TODO: Change the creation of the entities in the database to not use the imidate creation method, BUT first create a temporary model, add all the info to it
    // make sure that the token has been created, and there is not conflicts with unique names or pks AND then save();

    const createdUser = await this.usersService.addUser(newUser);
    createdUser.token = await this.generateToken(createdUser);
    return createdUser;
  };

  public async signIn(attemptedUser: userDto): Promise<UserType>{
    const user = await this.usersService.getUserByUsername(attemptedUser.username);
    if(user){
      const isPasswordCorrect = await HashUtls.comparePassword((attemptedUser.password+this.configService.get<string>("PAPPER")), user.password);
      if (isPasswordCorrect){
        user.token = await this.generateToken(user);
        return user;
      }
    }
    throw new CustomException("username or password are wrong", HttpStatus.UNAUTHORIZED);
  }

  private generateToken(user: UserType): Promise<string>{
    Logger.log(`generating a jwt token for user ${user.username}`);
    // const token = this.jwtService.sign({ user },  this.configService.get<string>("TOKEN_SECRET"), { expiresIn: this.configService.get<string>("TOKEN_EXPIRES_TIME")});
    return this.jwtService.signAsync({ id: user.id }, {
      secret: this.configService.get<string>("TOKEN_SECRET"),
      expiresIn: this.configService.get<string>("TOKEN_EXPIRES_TIME")
    });
  }
}
