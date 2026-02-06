import { CreateUserDto } from '@lib/library';
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { UsersRepository } from './infrastructure/repository/users.repository';

@Injectable()
export class UsersService {
  constructor(
    private readonly dataSource: DataSource,
    private readonly usersRepository: UsersRepository,
  ) {}
  async create(dto: CreateUserDto) {
    return this.dataSource.transaction(async (manager) => {
      return await this.usersRepository.create(dto, manager);
    });
  }
}
