import { Module } from '@nestjs/common';
import { PingController } from './app.controller';
import { AuthModule } from './components/auth/auth.module';
import { UsersModule } from './components/users/users.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './configuration/main';

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
    AuthModule,
    UsersModule,
  ],
  controllers: [PingController],
  providers: [],
})
export class AppModule {}
