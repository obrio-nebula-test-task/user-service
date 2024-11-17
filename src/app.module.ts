import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KnexModule } from 'nest-knexjs';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
