/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('jobs', (table) => {
    table.increments('id')
    table.string('name')
    table.string('date')
    table.string('description')
    table.string('part_id')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('jobs')
}
