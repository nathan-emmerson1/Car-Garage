/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('jobs').del()
  await knex('jobs').insert([
    { id: 1, name: 'the ultimate', date: '21/4/21', part_id: '2007' },
    { id: 2, name: 'the ultimate', date: '21/4/21', part_id: '2007' },
    { id: 3, name: 'the ultimate', date: '21/4/21', part_id: '2007' },
    { id: 4, name: 'the ultimate', date: '21/4/21', part_id: '2007' },
    { id: 5, name: 'the ultimate', date: '21/4/21', part_id: '2007' },
    { id: 6, name: 'the ultimate', date: '21/4/21', part_id: '2007' },
  ])
}
