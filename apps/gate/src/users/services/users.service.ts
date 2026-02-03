import { CreateUserDto, UpdateUserDto } from '@lib/library/src';
import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { UsersConfig } from '../config/users.config';

@Injectable()
export class UsersService {
  constructor(private readonly usersConfig: UsersConfig) {}
  async create(createUserDto: CreateUserDto) {
    try {
      return (
        await axios.post(this.usersConfig.usersService, createUserDto)
      ).data();
    } catch (error) {
      console.log('error:', error);
    }
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
