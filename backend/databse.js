const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "mysql",
  user: "root",
  password: "root@123",
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
