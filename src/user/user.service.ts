import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy, RmqRecordBuilder } from '@nestjs/microservices';
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

    const record = new RmqRecordBuilder(result)
      .setOptions({
        headers: {
          'x-delay': process.env.RABBTIMQ_MESSAGE_DELAY,
        },
      })
      .build();
    this.rabbitMQClient.emit('pattern', record);
    // this.rabbitMQClient.send()
    return result;
  }
}
