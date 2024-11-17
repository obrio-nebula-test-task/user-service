import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserEntity, CreateUserDto } from './types';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  users(): Promise<UserEntity[]> {
    return this.userService.getUsers();
  }

  @Post()
  user(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.userService.addUser(createUserDto)
  }
}
