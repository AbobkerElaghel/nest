import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import TodoType from './todo.interface';

@Controller('user/:id/todo')
export class TodoController {
  // @HttpCode(HttpStatus.OK)
  // @Get()
  // async getAllTodo(): Promise<TodoType>{
  //
  // }
}
