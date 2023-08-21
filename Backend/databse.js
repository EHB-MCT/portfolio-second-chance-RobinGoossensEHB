const mysql = require("mysql2");

// load env variables
require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: "root1",
  password: "root123",
  database: "nodeDB",
  port: "3306",
});

connection.connect((error) => {
  if (error) {
    console.log(error, "Database Connection Error");
  } else {
    console.log("Database Connected");
  }
});

module.exports = connection;
