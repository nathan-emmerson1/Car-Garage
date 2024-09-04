/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('vehicles', (table) => {
    table.increments('id')
    table.string('name')
    table.string('make')
    table.string('model')
    table.integer('job_id')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('vehicle')
}
