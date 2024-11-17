import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectConnection } from 'nest-knexjs';
import { UserEntity } from './types';

@Injectable()
export class UserRepository {
  constructor(@InjectConnection() private readonly knex: Knex) {}

  async findAll(): Promise<UserEntity[]> {
    return this.knex
      .select('first_name as firstName', 'last_name as lastName')
      .from<UserEntity>('users');
  }
}
