// jest test for employee, used to test vs input, not if any specific information is added.
// taken from Unit 10, Sections 11-16 and Mini Project solved. 

const Employee = require('../lib/Employee');
const employee = new Employee("Deon", 1, "deon@main.me");

test("are any values provided for employee", () => {
  expect(employee.name).toEqual(expect.any(String));
  expect(employee.email).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
});

test("if employee's name is provided", () => {
  expect(employee.getName()).toEqual(expect.any(String));
});

test("if employee's email is provided", () => {
  expect(employee.getEmail()).toEqual(expect.any(String));
});

test("if employee's id is provided", () => {
  expect(employee.getId()).toEqual(expect.any(Number));
});

test("if employee's role is defined", () => {
  expect(employee.getRole()).toEqual(expect.any(String));
});