// jest test for intern, used to test vs input, not if any specific information is added.
// taken from Unit 10, Sections 11-16 and Mini Project solved. 

const Intern = require("../lib/Intern");
const intern = new Intern("Josh", 300, "josh@main.me", "UPenn");

test("are any values provided for intern", () => {
  expect(intern.name).toEqual(expect.any(String));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.school).toEqual(expect.any(String));
});

test("if intern's name is provided", () => {
  expect(intern.getName()).toEqual(expect.any(String));
});

test("if intern's email is provided", () => {
  expect(intern.getEmail()).toEqual(expect.any(String));
});

test("if intern's id is provided", () => {
  expect(intern.getId()).toEqual(expect.any(Number));
});

test("if intern's school is given", () => {
  expect(intern.getSchool()).toEqual(expect.any(String));
});

test("if intern's role is defined", () => {
  expect(intern.getRole()).toEqual(expect.any(String));
});