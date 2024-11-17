import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('users').del();

  await knex('users').insert([
    { first_name: 'Nikita', last_name: 'Vasilinenko' },
    { first_name: 'Billy', last_name: 'Herrington' },
    { first_name: 'Van', last_name: 'Darkholme' },
  ]);
}
