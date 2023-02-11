import { Injectable } from "@nestjs/common";
import { UpdateUsersDto } from "./users.dto";
import { UsersDal } from "./users.dal";

@Injectable()
export class UsersService {
  constructor(private readonly usersDal: UsersDal) {}
  async list() {
    try {
      const data = await this.usersDal.list();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }

  get(id: string) {
    return `This action returns a #${id} user`;
  }

  update(id: string, user: UpdateUsersDto) {
    return `This action updates a #${id} user`;
  }

  delete(id: string) {
    return `This action deletes a #${id} user`;
  }
}
