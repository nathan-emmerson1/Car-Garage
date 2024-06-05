/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('vehicles').del()
  await knex('vehicles').insert([
    { id: 1, name: 'the ultimate', make: 'Toyota', model: '2007' },
    { id: 2, name: 'the banger', make: 'Prezcels', model: '3001' },
    { id: 3, name: 'the mr take your girl', make: 'donkey', model: 'the zyzz' },
    { id: 4, name: 'TheBatmobile', make: 'Batman', model: 'Batcave' },
  ])
}
