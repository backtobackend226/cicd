import { CreateUserDto } from '@lib/library';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../domain/user.entity';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(User) private readonly repo: Repository<User>,
  ) {}
  async create(dto: CreateUserDto, manager?: EntityManager) {
    const user = new User(dto);
    if (manager) {
      return await manager.save(user);
    }
    return await this.repo.save(user);
  }
}
