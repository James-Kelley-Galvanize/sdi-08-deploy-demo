const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { getAllPets } = require("./db/controllers");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

console.log(`NODE ENVIRONMENT PER HEROKU`, process.env.NODE_ENV);

app.get("/", (req, res) => {
  res.send(`hello world`);
});
app.get("/pets", (req, res) => {
  getAllPets().then((data) => res.send(data));
});

module.exports = app;
