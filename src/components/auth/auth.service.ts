import { UsersMapper } from "../../database/mapper";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthLocalDto, CreateAuthDto } from "./auth.dto";
import * as bcrypt from "bcrypt";
import { UsersDto } from "../users/users.dto";
import ID from "../../utils/id";
import { AuthDal } from "./auth.dal";

@Injectable()
export class AuthService {
  constructor(private readonly authDal: AuthDal) {}
  async registration(createAuthDto: CreateAuthDto) {
    const hash = await bcrypt.hash(createAuthDto.password, 10);

    const user: UsersDto = {
      id: ID("US"),
      email: createAuthDto.email,
      name: createAuthDto.email.split("@")[0],
      user_role_id: 1,
    };

    const authLocal: AuthLocalDto = {
      password_hash: hash,
      user_id: user.id,
    };
    const data = await this.authDal.registration(user, authLocal);
    return data;
  }

  async login(createAuthDto: CreateAuthDto) {
    const init = await this.authDal.login({ email: createAuthDto.email });
    if (!init) throw new UnauthorizedException();
    const hash = await bcrypt.compare(createAuthDto.password, init.password_hash);
    if (!hash) throw new UnauthorizedException();
    //! logic for session
    const { password_hash, ...user } = init;
    return user;
  }
}
