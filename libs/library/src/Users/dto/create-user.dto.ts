import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  nane: string;
  @IsString()
  password: string;
}
