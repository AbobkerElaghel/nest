import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model<User> {

  @Column({ primaryKey:true, autoIncrement:true })
  id: number

  @Column
  name: string;

  @Column({ unique: true })
  username: string;

  @Column({ validate: {
      isLowercase: true,
  }})
  password: string;
}