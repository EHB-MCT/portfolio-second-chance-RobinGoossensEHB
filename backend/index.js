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

//get by Id
app.get("/student/:id", (req, res) => {
  let sid = req.params.id;

  let query = `select * from student where id = ${sid}`;
  db.query(query, (err, result) => {
    if (err) {
      console.log(err, "Error while getting data from database");
    } else if (result.length > 0) {
      res.send({
        message: `User with Id ${sid}`,
        data: result,
      });
    } else {
      res.send({
        message: `No record found against id ${sid}`,
      });
    }
  });
});

//add student in database
app.post("/student", (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let mobile = req.body.number;

  let query = `insert into student (name,email,mobile) Values ( '${name}','${email}', '${mobile}')`;
  console.log(query);
  db.query(query, (error, result) => {
    if (error) {
      console.log(error, "error occured while saving data");
    } else if (result.affectedRows > 0) {
      res.send({
        message: `Record inserted Successfully`,
      });
    } else {
      res.send({
        message: `Zero rows updated`,
      });
    }
  });
});

//update student in database
app.put("/student/:id", (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let mobile = req.body.number;
  let sid = req.params.id;

  let query = `update student set name =  '${name}', email = '${email}', mobile = '${mobile}' where id = '${sid}'`;

  db.query(query, (error, result) => {
    if (error) {
      console.log(error, "error occured while saving data");
    } else if (result.affectedRows > 0) {
      res.send({
        message: `Record updated Successfully`,
      });
    } else {
      res.send({
        message: `No record found against id ${sid}`,
      });
    }
  });
});

//delete by Id
app.delete("/student/:id", (req, res) => {
  let sid = req.params.id;

  let query = `delete from student where id = ${sid}`;
  db.query(query, (err, result) => {
    if (err) {
      console.log(err, "Error while getting data from database");
    } else if (result.affectedRows > 0) {
      res.send({
        message: `User deleted successfully`,
      });
    } else {
      res.send({
        message: `No record found against id ${sid}`,
      });
    }
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
