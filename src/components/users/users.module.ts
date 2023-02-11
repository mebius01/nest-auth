import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { UsersDal } from "./users.dal";
import { UsersMapper } from "src/database/mapper";

@Module({
  controllers: [UsersController],
  providers: [UsersService, UsersDal, UsersMapper],
})
export class UsersModule {}
