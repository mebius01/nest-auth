import { Injectable } from "@nestjs/common";
import { UsersDto } from "./users.dto";
import { UsersMapper } from "src/database/mapper";
import { TUser } from "src/database/types";

@Injectable()
export class UsersDal {
  constructor(private readonly usersMapper: UsersMapper) {}
  async list(): Promise<TUser[]> {
    try {
      const data = await this.usersMapper.list();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }

  get(id: string) {
    return `This action returns a #${id} user`;
  }

  update(id: string, user: UsersDto) {
    return `This action updates a #${id} user`;
  }

  delete(id: string) {
    return `This action deletes a #${id} user`;
  }
}
