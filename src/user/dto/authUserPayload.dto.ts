import { IsNotEmpty } from 'class-validator';
import { CreateUserDto } from './createUser.dto';

export class authUserDto extends CreateUserDto {
  @IsNotEmpty()
  readonly id: number;
}
