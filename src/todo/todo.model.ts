import { Column, Model, Table, ForeignKey, BelongsTo, CreatedAt } from 'sequelize-typescript';
import {User} from '../users/users.model';

@Table
export class Todo extends Model<Todo> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column({unique: true, allowNull: false, validate: { notNull: true}})
  title: string;

  @Column({ allowNull:false, validate: { notNull: true }})
  content: string;

  @CreatedAt
  createdAt: Date;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  todo: User;
}