import { AuthLocalMapper, UsersMapper } from "../../database/mapper";
import { Injectable } from "@nestjs/common";
import { AuthLocalDto } from "./auth.dto";
import { UsersDto } from "../users/users.dto";
import { TUser } from "src/types/users.type";
import { TAuthLocal } from "src/types/auth.type";

@Injectable()
export class AuthDal {
  constructor(
    private readonly usersMapper: UsersMapper,
    private readonly authLocalMapper: AuthLocalMapper
  ) {}
  async registration(usersDto: UsersDto, authLocalDto: AuthLocalDto) {
    //! transaction
    const data = await this.usersMapper.insert(usersDto);
    await this.authLocalMapper.insert(authLocalDto);
    return data;
  }

  async login(email: { email: string }) {
    const user = await this.usersMapper.get<{ email: string }, TUser>(email);
    const auth = await this.authLocalMapper.get<{ user_id: string }, TAuthLocal>({
      user_id: user.id,
    });
    const data = { ...user, password_hash: auth.password_hash };
    return data;
  }
}
