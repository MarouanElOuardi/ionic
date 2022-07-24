const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id, nom 
    FROM users LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

async function create(id) {
  const result = await db.query(
    `INSERT INTO users 
    (nom) 
    VALUES 
    ("${id}")`
  );

  let message = "Error in creating user";

  if (result.affectedRows) {
    message = "User created successfully";
  }

  return { message };
}

async function update(r) {
  const result = await db.query(
    `UPDATE users
    SET nom='${r.body.nom}'
    WHERE id=${r.params.id}`
  );

  let message = "Error in updating user";

  if (result.affectedRows) {
    message = "User updated successfully";
  }

  return { message };
}

async function remove(r) {
  let id = r.params.id
  const result = await db.query(
    `DELETE FROM users WHERE id=${id}`
  );

  let message = "Error in deleting user";

  if (result.affectedRows) {
    message = "User deleted successfully";
  }

  return { message };
}

module.exports = {
  getMultiple,
  create,
  update,
  remove,
};
