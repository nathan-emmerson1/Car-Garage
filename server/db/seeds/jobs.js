/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('jobs').del()
  await knex('jobs').insert([
    {
      id: 1,
      name: 'Oil Change',
      date: '2024-07-15',
      description: 'Routine oil change for the engine',
      part_id: 'OC-12345',
    },
    {
      id: 2,
      name: 'Brake Replacement',
      date: '2024-08-20',
      description: 'Replace brake pads and rotors',
      part_id: 'BR-67890',
    },
    {
      id: 3,
      name: 'Tire Rotation',
      date: '2024-06-10',
      description: 'Rotate tires for even wear',
      part_id: 'TR-24680',
    },
    {
      id: 4,
      name: 'Battery Check',
      date: '2024-05-05',
      description: 'Check battery health and replace if needed',
      part_id: 'BC-13579',
    },
    {
      id: 5,
      name: 'Transmission Repair',
      date: '2024-04-22',
      description: 'Repair or replace transmission',
      part_id: 'TR-11223',
    },
  ])
}
