import { PartialType } from "@nestjs/mapped-types";
import { IsString, IsEmail, MinLength, Length } from "class-validator";

export class CreateAuthDto {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;
}

export class AuthLocalDto {
  @IsString()
  password_hash: string;

  @IsString()
  @Length(12)
  user_id: string;
}

export class AuthSessionsDto {
  @IsString()
  @Length(12)
  user_id: string;

  @IsString()
  session: string;
}

export class UpdateAuthDto extends PartialType(CreateAuthDto) {}
