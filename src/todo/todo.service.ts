import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Todo } from './todo.model';
import TodoDto from './todo.dto';
import TodoType from './todo.interface';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(Todo)
    private todoModel: typeof Todo,
  ) {}

  async addTodo(todo: TodoDto): Promise<TodoType>{
    return this.todoModel.create(todo);
  }

  async editTodo(todo: TodoType): Promise<[number, Todo[]]>{
    return this.todoModel.update({...todo}, {where: {id: todo.id}})
  }

  async removeTodoByPk(pk: number): Promise<number>{
    return this.todoModel.destroy({where: {id: pk}})
  }

  async removeTodoByTitle(title: string): Promise<number>{
    return this.todoModel.destroy({where: {title}})
  }

  async getAllUserTodoByPk(pk: number): Promise<Todo[]>{
    return this.todoModel.findAll({where: {userId: pk}})
  }
}
