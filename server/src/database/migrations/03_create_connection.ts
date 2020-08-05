import Knex from "knex";

//alteraçoes a serem realizadas
export async function up(Knex: Knex) {
  return Knex.schema.createTable("connections", (table) => {
    table.increments("id").primary();

    table
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    table
      .timestamp("created_at")
      .defaultTo(Knex.raw("CURRENT_TIMESTAMP"))
      .notNullable();
  });
}

//rollback
export async function down(Knex: Knex) {
  return Knex.schema.dropTable("connections");
}
