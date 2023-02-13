import { Injectable } from "@nestjs/common";
import { UpdateUsersDto } from "./users.dto";
import { UsersDal } from "./users.dal";
import { TUser } from "src/types/users.type";

@Injectable()
export class UsersService {
  constructor(private readonly usersDal: UsersDal) {}
  async list(): Promise<TUser[]> {
    try {
      const data = await this.usersDal.list();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async get(id: string): Promise<TUser> {
    try {
      const data = await this.usersDal.get(id);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id: string, user: UpdateUsersDto): Promise<TUser> {
    try {
      const data = await this.usersDal.update(id, user);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(id: string): Promise<TUser> {
    try {
      const data = await this.usersDal.delete(id);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
