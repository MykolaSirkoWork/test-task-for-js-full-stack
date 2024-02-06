import { UserRole } from '../types/role.enum';

export class UpdateUserDto {
  readonly username: string;

  readonly email: string;

  readonly role: UserRole;
}
