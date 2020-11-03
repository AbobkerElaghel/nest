import Todo from './todo.interface';
export default class TodoDto implements Todo{
  content: string;
  createdAt: Date;
  title: string;
  userId: number;
}