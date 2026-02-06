import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { Environments, getEnvFilePath } from '@lib/library';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvFile: process.env.NODE_ENV === Environments.Prod,
      envFilePath: getEnvFilePath('gate'),
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
