
const request = require("supertest");
const express = require("express");
const app = express();
app.use(cors());
app.use(bodyParser.json());
const db = require("./database");
const Routes = require("./index");
app.use(routes);

const server = app.listen(3000, () => {
  console.log("Server started on port 3000");
});

module.exports = { app, server };
test("string with a single number should result in the number itself", () => {
  expect(index.Check()).toBe(1);
});


// Example test suite
describe("Student API", () => {
  // Test GET /student endpoint
  it("should get all student records", async () => {
    const response = await request(app).get("/student");
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("all user data");
    // Add more assertions as needed
  });

  // Test GET /student/:id endpoint
  it("should get a student record by ID", async () => {
    const response = await request(app).get("/student/1");
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toContain("User with Id 1");
    // Add more assertions as needed
  });

  // Test POST /student endpoint
  it("should add a student record", async () => {
    const newStudent = {
      name: "John Doe",
      email: "johndoe@example.com",
      number: "1234567890",
    };
    const response = await request(app).post("/student").send(newStudent);
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Record inserted Successfully");
    // Add more assertions as needed
  });

  // Test PUT /student/:id endpoint
  it("should update a student record by ID", async () => {
    const updatedStudent = {
      name: "Updated Name",
      email: "updated@example.com",
      number: "9876543210",
    };
    const response = await request(app)
      .put("/student/1")
      .send(updatedStudent);
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Record updated Successfully");
    // Add more assertions as needed
  });

  // Test DELETE /student/:id endpoint
  it("should delete a student record by ID", async () => {
    const response = await request(app).delete("/student/1");
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("User deleted successfully");
    // Add more assertions as needed
  });
});

// Run the tests
describe("Express API Tests", () => {
  it("should start the Express server", async () => {
    const server = app.listen(0);
    const port = server.address().port;
    expect(port).toBeGreaterThan(0);
    server.close();
  });
});