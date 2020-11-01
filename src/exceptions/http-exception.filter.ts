import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, Logger } from '@nestjs/common';

import { HttpArgumentsHost } from '@nestjs/common/interfaces';
import CustomException from './CustomExecption';
import {Response} from 'express';
import { UniqueConstraintError, ValidationError } from 'sequelize';

@Catch(Error)
export class HttpExceptionFilter<T extends Error> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
      const ctx: HttpArgumentsHost = host.switchToHttp();
      const response: Response = ctx.getResponse<Response>();
      let status = HttpStatus.INTERNAL_SERVER_ERROR;
      let message = "Internal server error";

      if (exception instanceof HttpException){
        status = exception.getStatus();
      }else if (exception instanceof UniqueConstraintError){
        message = exception.original.message;
        status = HttpStatus.FORBIDDEN;
      }else if (exception instanceof ValidationError){
        message = exception.message;
        status = HttpStatus.UNPROCESSABLE_ENTITY;
      }

      Logger.error(exception.name);
      Logger.error(exception.message, exception.stack);
      return response.status(status).json(new CustomException(message, status));
  };


}