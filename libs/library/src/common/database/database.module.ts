import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get<string>('PG_URL'),
        autoLoadEntities: true,
        synchronize: process.env.NODE_ENV !== 'prod' ? true : false,
      }),
    }),
  ],
})
export class DataBaseModule {}
