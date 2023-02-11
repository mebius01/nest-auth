import { Injectable } from '@nestjs/common';
import { UsersDto } from './users.dto';

@Injectable()
export class UsersService {
  create(user: UsersDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, user: UsersDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
