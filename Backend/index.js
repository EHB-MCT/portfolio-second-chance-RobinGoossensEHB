const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.json());

const db = require("./databse");

function Check() {
  return 1;
}

//geting all records from the database
app.get("/student", (req, res) => {
  let query = "select * from student";

  db.query(query, (err, result) => {
    if (err) {
      console.log(err, "Error while getting data from database");
    } else if (result.length > 0) {
      res.send({
        message: "all user data",
        data: result,
      });
    }
  });
});


app.listen(3000, () => {
  console.log("Server started on port 3000");
});
