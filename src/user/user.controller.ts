import { Controller, Get } from '@nestjs/common';
import { UserEntity } from './types';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  users(): Promise<UserEntity[]> {
    return this.userService.getUsers();
  }
}
