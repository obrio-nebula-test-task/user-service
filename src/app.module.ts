import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { KnexModule } from 'nest-knexjs';
import { AppController } from './app.controller';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { UserRepository } from './user/user.repository';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ClientsModule.register([
      {
        name: 'RABBITMQ_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [
            `amqp://${process.env.RABBITMQ_USERNAME}:${process.env.RABBITMQ_PASSWORD}@${process.env.RABBITMQ_HOST}:${process.env.RABBITMQ_PORT}`,
          ],
          queue: 'push_notification',
          queueOptions: {
            durable: true,
          },
        },
      },
    ]),
    KnexModule.forRootAsync({
      useFactory: () => ({
        config: {
          client: 'pg',
          connection: {
            connectionString: process.env.DATABASE_URL,
            host: process.env['DB_HOST'],
            port: process.env['POSTGRES_PORT'],
            user: process.env['POSTGRES_USER'],
            database: process.env['POSTGRES_DB'],
            password: process.env['POSTGRES_PASSWORD'],
            ssl: process.env['DB_SSL'] ? { rejectUnauthorized: false } : false,
          },
        },
      }),
    }),
    UserModule,
  ],
  controllers: [AppController, UserController],
  providers: [UserService, UserRepository],
})
export class AppModule {}
