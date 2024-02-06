import { IsEmail, IsNotEmpty } from 'class-validator';
import { UserRole } from '../types/role.enum';

export class CreateUserDto {
  @IsNotEmpty()
  readonly username: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  readonly password: string;

  @IsNotEmpty()
  readonly role: UserRole;
}
