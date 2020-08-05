import knex from "knex";
import path from "path";

const db = knex({
  client: "sqlite3",
  connection: {
    filename: path.resolve(__dirname, "database.sqlite"),
  },
  useNullAsDefault: true, //somente para sqlite pois ele nao sabe o qeu jogar para valroes nullos
});

export default db;
