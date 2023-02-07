import { ConfigService } from '@nestjs/config';
import { Controller, Get } from '@nestjs/common';

@Controller('ping')
export class PingController {
  constructor(private readonly config: ConfigService) {}

  @Get()
  get(): { version: string; port: number } {
    return {
      version: process.env.npm_package_version,
      port: Number(this.config.get('port')),
    };
  }
}
