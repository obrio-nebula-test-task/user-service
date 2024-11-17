import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { UserRepository } from './user.repository';
import { CreateUserDto, UserEntity } from './types';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    @Inject('RABBITMQ_SERVICE') private readonly rabbitMQClient: ClientProxy,
  ) {}

  async getUsers(): Promise<UserEntity[]> {
    return this.userRepository.findAll();
  }

  async addUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const result = await this.userRepository.create(createUserDto);
    this.rabbitMQClient.emit('pattern', createUserDto);
    return result;
  }
}
