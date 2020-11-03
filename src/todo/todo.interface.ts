export default interface Todo {
  id?: number;
  title: string;
  content: string;
  createdAt: Date;
  userId: number
}