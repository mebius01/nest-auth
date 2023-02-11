import { IsString, IsEmail, Length, IsNumber } from 'class-validator';

export class UsersDto {
  @IsString()
  @Length(12)
  id: string;

  @IsString()
  name: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsNumber()
  user_role_id: number;
}
