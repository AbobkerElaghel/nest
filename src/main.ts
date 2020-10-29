import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './exceptions/http-exception.filter';

async function bootstrap(): Promise<any> {
  const app : INestApplication = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  return await app.listen(3000);
};

bootstrap();