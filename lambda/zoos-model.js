const knex = require("knex");

const config = {
  client: "sqlite3",
  connection: {
    filename: "./data/lambda.db3"
  },
  useNullAsDefault: true
};

const db = knex(config);

module.exports = {
  find,
  insert,
  remove,
  update,
  findById
};

function find() {
  return db("zoos");
}

function findById(id) {
  return db("zoos")
    .where({ id })
    .first();
}

function insert(body) {
  return db("zoos").insert(body);
}

function update(id, changes) {
  return db("zoos")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("zoos")
    .where({ id })
    .del();
}
