import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, LoggerErrorInterceptor } from 'nestjs-pino';

import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });

  const config = app.get(ConfigService);
  const PORT = config.get('port');
  const PREFIX = config.get('prefix');

  app.setGlobalPrefix(PREFIX);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  app.useLogger(app.get(Logger));
  app.useGlobalInterceptors(new LoggerErrorInterceptor());

  await app.listen(PORT, () => {
    console.log(
      `Server started on PORT = ${PORT} MODE_ENV = ${process.env.NODE_ENV}`,
    );
  });
}
bootstrap();
