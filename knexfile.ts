// Update with your config settings.
import 'dotenv/config'

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'pg',
    connection: {
      connectionString: process.env.DATABASE_URL,
      host: process.env['DB_HOST'],
      port: process.env['POSTGRES_PORT'],
      user: process.env['POSTGRES_USER'],
      database: process.env['POSTGRES_DB'],
      password: process.env['POSTGRES_PASSWORD'],
    },
    migrations: {
      directory: './src/database/migrations',
      tableName: 'obrio_migrations',
    },
    seeds: {
      directory: './src/database/seeds',
    },
  },

  staging: {
    client: 'pg',
    connection: {
      connectionString: process.env.DATABASE_URL,
      host: process.env['DB_HOST'],
      port: process.env['POSTGRES_PORT'],
      user: process.env['POSTGRES_USER'],
      database: process.env['POSTGRES_DB'],
      password: process.env['POSTGRES_PASSWORD'],
    },
    migrations: {
      directory: './src/database/migrations',
      tableName: 'obrio_migrations',
    },
    seeds: {
      directory: './src/database/seeds',
    },
  },

  production: {
    client: 'pg',
    connection: {
      connectionString: process.env.DATABASE_URL,
      host: process.env['DB_HOST'],
      port: process.env['POSTGRES_PORT'],
      user: process.env['POSTGRES_USER'],
      database: process.env['POSTGRES_DB'],
      password: process.env['POSTGRES_PASSWORD'],
    },
    migrations: {
      directory: './src/database/migrations',
      tableName: 'obrio_migrations',
    },
    seeds: {
      directory: './src/database/seeds',
    },
  }
};
