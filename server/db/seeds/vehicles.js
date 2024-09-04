/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('vehicles').del()
  await knex('vehicles').insert([
    { id: 1, name: 'Ford Mustang', make: 'Ford', model: 'Mustang', job_id: 1 },
    {
      id: 2,
      name: 'Chevrolet Camaro',
      make: 'Chevrolet',
      model: 'Camaro',
      job_id: 2,
    },
    {
      id: 3,
      name: 'Tesla Model S',
      make: 'Tesla',
      model: 'Model S',
      job_id: 3,
    },
    {
      id: 4,
      name: 'Toyota Corolla',
      make: 'Toyota',
      model: 'Corolla',
      job_id: 4,
    },
    { id: 5, name: 'Honda Civic', make: 'Honda', model: 'Civic', job_id: 5 },
    {
      id: 6,
      name: 'Nissan Altima',
      make: 'Nissan',
      model: 'Altima',
      job_id: 6,
    },
  ])
}
