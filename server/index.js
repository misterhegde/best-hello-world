const keys = require("./keys");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const { Pool } = require("pg");
const pgClient = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort,
});

pgClient.on("connect", (client) => {
  client
    .query("CREATE TABLE IF NOT EXISTS visits (number INT)")
    .catch((err) => console.error(err));
});

app.get("/", (req, res) => {
  res.send("server working fine");
});

app.get("/visits", async (req, res) => {
  const values = await pgClient.query("SELECT * from visits");
  res.send(values);
});

app.put("/visits", async (req, res) => {
  const value = req.body.value;
  pgClient.query("INSERT INTO visits(number) VALUES($1)", [value]);
  res.send({ working: true });
});

app.listen(5001, (error) => {
  console.log("server listening on port 5001");
});
