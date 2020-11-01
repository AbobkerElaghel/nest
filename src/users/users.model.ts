import { AfterCreate, BeforeCreate, Column, Model, Table, NotNull } from 'sequelize-typescript';
import { Logger } from '@nestjs/common';
import HashUtls from '../utils/HashUtls';

@Table
export class User extends Model<User> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  name: string;

  @Column({ unique: true, allowNull:false, validate: { notNull: true} })
  username: string;

  @Column({ validate: {
      isAlphanumeric: true
  }})
  password: string;

  @BeforeCreate
   static async hashPassword(instance: User): Promise<void>{
    Logger.log(`Hashing password for the user - ${instance.username} ...`);
    const salt = await HashUtls.createSalt();
    instance.password = await HashUtls.hashPassword(instance.password, salt);
  }

  @AfterCreate
  static logCreation(instance: User){
    Logger.log(`new database entry - Model User - ${instance.username}`);
  }
}