const db = require("./dbConnection");

function getAllPets() {
  return db("pets").select("*");
}

module.exports = { getAllPets };
