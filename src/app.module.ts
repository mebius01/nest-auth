import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { PingController } from './app.controller';
import { AuthModule } from './components/auth/auth.module';
import { UsersModule } from './components/users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './configuration/config';
import { LoggerModule } from 'nestjs-pino';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.cwd()}/src/configuration/env/.env.${
        process.env.NODE_ENV
      }`,
      isGlobal: true,
      load: [configuration],
      cache: true,
    }),
    LoggerModule.forRoot({ ...configuration().pino }),
    AuthModule,
    UsersModule,
  ],
  controllers: [PingController],
  providers: [],
})
export class AppModule {}
