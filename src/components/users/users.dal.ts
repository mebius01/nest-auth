import { Injectable } from "@nestjs/common";
import { UpdateUsersDto, UsersDto } from "./users.dto";
import { UsersMapper } from "src/database/mapper";
import { TUser } from "src/types/users.type";

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

  async get(id: string): Promise<TUser> {
    try {
      type TUserId = Omit<TUser, "email" | "name" | "user_role_id">;
      const data = await this.usersMapper.get<TUserId, TUser>({ id });
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id: string, user: UpdateUsersDto): Promise<TUser> {
    try {
      const data = await this.usersMapper.update<{ id: string }, { name: string }, TUser>(
        { id },
        { name: user.name }
      );
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(id: string): Promise<TUser> {
    try {
      const data = await this.usersMapper.delete<{ id: string }, TUser>({ id });
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
