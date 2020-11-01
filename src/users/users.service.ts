import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import UserType from './interfaces/user.interface';
import { userDto } from './dto/create-userDto';


@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User)
        private userModel: typeof User,
      ) {}

    addUser(user: userDto): Promise<UserType>{
        return this.userModel.create(user);
    }

    getUserByUsername(username: string): Promise<UserType>{
        return this.userModel.findOne({where :{username}});
    }
}
