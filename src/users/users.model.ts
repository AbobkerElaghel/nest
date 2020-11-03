import { AfterCreate, BeforeCreate, Column, HasMany, Model, Table } from 'sequelize-typescript';
import { Logger } from '@nestjs/common';
import HashUtls from '../utils/HashUtls';
import { Todo } from '../todo/todo.model';

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

  @HasMany(() => Todo)
  todos: Todo[];

  @BeforeCreate
   static async hashPassword(instance: User): Promise<void>{
    // TODO: CHECK OF THE UNIQUE CONSTRAINT ERROR IS THROWN BEFORE OR AFTER THE HASHING OF THE PASSWORD, IN ORDER TO MAKE SURE THERE IS NOT ROOM FOR EFFICIENCY EXPLOIT.

    Logger.log(`Hashing password for the user - ${instance.username} ...`);
    const salt = await HashUtls.createSalt();
    instance.password = await HashUtls.hashPassword(instance.password+process.env.PEPPER, salt);
  }

  @AfterCreate
  static logCreation(instance: User){
    Logger.log(`new database entry - Model User - ${instance.username}`);
  }
}