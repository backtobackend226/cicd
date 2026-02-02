import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from '@lib/library/src';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async getHello(@Body() dto: CreateUserDto) {
    return await this.usersService.create(dto);
  }
}
