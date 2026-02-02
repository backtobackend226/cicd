import { CreateUserDto, UpdateUserDto } from '@lib/library/src';
import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { UsersConfig } from '../config/users.config';

@Injectable()
export class UsersService {
  constructor(private readonly usersConfig: UsersConfig) {}
  async create(createUserDto: CreateUserDto) {
    console.log(
      '🚀 ~ UsersService ~ create ~ createUserDto:',
      this.usersConfig.usersService,
    );
    try {
      return await axios.post(this.usersConfig.usersService, createUserDto);
    } catch (error) {
      console.log('🚀 ~ UsersService ~ create ~ error:', error);
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
