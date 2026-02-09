import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get('PG_URL'),
        autoLoadEntities: true,
        synchronize: true,
        // dropSchema: process.env.NODE_ENV === 'test' ? true : false,
      }),
    }),
  ],
})
export class DataBaseModule {}
