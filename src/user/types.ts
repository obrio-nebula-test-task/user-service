import { IsNotEmpty, Length } from 'class-validator';

export interface UserEntity {
  firstName: string;
  lastName: string;
}

export class CreateUserDto {
  @IsNotEmpty()
  @Length(2, 255)
  firstName: string;

  @IsNotEmpty()
  @Length(2, 255)
  lastName: string;
}
