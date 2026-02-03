import { configValidationUtility } from '@lib/library/src';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IsNumber, IsString } from 'class-validator';

@Injectable()
export class UsersConfig {
  @IsNumber()
  port: number;
  @IsString()
  nodeEnv: string;

  constructor(private readonly configService: ConfigService) {
    this.nodeEnv = this.configService.getOrThrow('NODE_ENV');
    this.port = +this.configService.get('PORT');
    configValidationUtility.validateConfig(this);
  }
}
