import { Module } from '@nestjs/common';
import { UsersController } from './api/users.controller';
import { UsersService } from './services/users.service';
import { UsersConfig } from '../config/gate.config';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService, UsersConfig],
})
export class UsersModule {}
