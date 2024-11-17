// Update with your config settings.

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
      ssl: process.env['DB_SSL'] ? { rejectUnauthorized: false } : false,
    },
    migrations: {
      directory: './src/database/migrations',
      tableName: 'obrio_migrations',
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
      ssl: process.env['DB_SSL'] ? { rejectUnauthorized: false } : false,
    },
    migrations: {
      directory: './src/database/migrations',
      tableName: 'obrio_migrations',
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
      ssl: process.env['DB_SSL'] ? { rejectUnauthorized: false } : false,
    },
    migrations: {
      directory: './src/database/migrations',
      tableName: 'obrio_migrations',
    },
  }
};
