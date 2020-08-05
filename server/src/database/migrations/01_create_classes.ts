import Knex from "knex";

//alteraçoes a serem realizadas
export async function up(Knex: Knex) {
  return Knex.schema.createTable("classes", (table) => {
    table.increments("id").primary();
    table.string("subject").notNullable();
    table.decimal("cost").notNullable();

    table
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
}

//rollback
export async function down(Knex: Knex) {
  return Knex.schema.dropTable("classes");
}
