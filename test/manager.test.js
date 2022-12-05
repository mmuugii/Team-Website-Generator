// jest test for manager, used to test vs input, not if any specific information is added.
// taken from Unit 10, Sections 11-16 and Mini Project solved. 

const Manager = require("../lib/Manager");
const manager = new Manager("Adam", 1000, "adam@main.me", 50);

test("are any values provided for manager", () => {
  expect(manager.name).toEqual(expect.any(String));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.officeId).toEqual(expect.any(Number));
});

test("if manager's name is provided", () => {
  expect(manager.getName()).toEqual(expect.any(String));
});

test("if manager's email is provided", () => {
  expect(manager.getEmail()).toEqual(expect.any(String));
});

test("if manager's id is provided", () => {
  expect(manager.getId()).toEqual(expect.any(Number));
});

test("if manager's office number is given", () => {
  expect(manager.getOfficeId()).toEqual(expect.any(Number));
});

test("if manager's role is defined", () => {
  expect(manager.getRole()).toEqual(expect.any(String));
});