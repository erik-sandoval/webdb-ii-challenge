const knex = require("knex");

const config = {
  client: "sqlite3",
  connection: {
    filename: "./lambda.db3"
  },
  useNullAsDefault: true
};

module.exports = knex(config);
