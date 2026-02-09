import { configValidationUtility } from '@lib/library';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IsNumber, IsString } from 'class-validator';

@Injectable()
export class UsersConfig {
  @IsNumber()
  port: number;
  @IsString()
  nodeEnv: string;
  @IsString()
  databaseUrl: string;

  constructor(private readonly configService: ConfigService) {
    console.log('DB URL:', process.env.PG_URL);
    this.nodeEnv = this.configService.getOrThrow('NODE_ENV');
    this.port = +this.configService.getOrThrow('USERS_PORT');
    this.databaseUrl = this.configService.getOrThrow('PG_URL');
    configValidationUtility.validateConfig(this);
  }
}
