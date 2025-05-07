/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  app.enableCors();
  const port = process.env.PORT || 3000;
  await app
    .listen(port)
    .then(() => {
      Logger.log(`🚀 Сервер запущен по адресу: http://localhost:${port}/${globalPrefix}`);
    })
    .catch((err) => {
      Logger.error(`Сервер не запустился по ошибке: ${err}`);
    });
}

bootstrap().catch(Logger.error);
