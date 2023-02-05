import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = app.get(ConfigService);
  const PORT = config.get('port');
  const PREFIX = config.get('prefix');

  app.setGlobalPrefix(PREFIX);
  await app.listen(PORT, () => {
    Logger.log(
      `Server started on PORT = ${PORT} MODE_ENV = ${process.env.NODE_ENV}`,
    );
  });
}
bootstrap();
