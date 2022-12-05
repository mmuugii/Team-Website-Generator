// jest test for engineer, used to test vs input, not if any specific information is added.
// taken from Unit 10, Sections 11-16 and Mini Project solved. 

const Engineer = require('../lib/Engineer');
const engineer = new Engineer("Mike", 100, "mike@eng.com", "mike100");

test("are any values provided for employee", () => {
  expect(engineer.name).toEqual(expect.any(String));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.github).toEqual(expect.any(String));
});

test("if engineer's name is provided", () => {
  expect(engineer.getName()).toEqual(expect.any(String));
});

test("if engineer's email is provided", () => {
  expect(engineer.getEmail()).toEqual(expect.any(String));
});

test("if engineer's id is provided", () => {
  expect(engineer.getId()).toEqual(expect.any(Number));
});

test("if engineer's github username is provided", () => {
  expect(engineer.getGithub()).toEqual(expect.any(String));
});

test("if engineer's role is provided", () => {
  expect(engineer.getRole()).toEqual(expect.any(String));
});