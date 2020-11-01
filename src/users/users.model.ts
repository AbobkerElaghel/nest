import { AfterCreate, BeforeCreate, Column, Model, Table, NotNull } from 'sequelize-typescript';
import { hash } from 'bcrypt';
import { Logger } from '@nestjs/common';

@Table
export class User extends Model<User> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  name: string;

  @Column({ unique: true, allowNull:false, validate: { notNull: true} })
  username: string;

  @Column({ validate: {
      isLowercase: true,
      isUppercase: true,
      isAlphanumeric: true
  }})
  password: string;

  @Column({ allowNull:false, validate: { notNull: true} })
  salt: string;

  @BeforeCreate
   static async hashPassword(instance: User): Promise<void>{
    Logger.log(`Hashing password for the user - ${instance.username}`);
    instance.password = await hash(instance.password, 8);
  }

  @AfterCreate
  static logCreation(instance: User){
    Logger.log(`new database entry - Model User - ${instance.username}`);
  }
}