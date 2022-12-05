// Team Website Generator Application
// Module 10 Challenge
// Created on 12/4/2022 by Muugii Munkhbold
const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
var outputHTML;
const team = [];

const managerQuestion = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: `What is the manager's name?`,
        },
        {
            type: 'input',
            name: 'email',
            message: `What is the manager's email?`,
        },
        {
            type: 'input',
            name: 'id',
            message: `What is the manager's id?`,
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: `What is the office number?`,
        }
    ]).then(answer => {
        const manager = new Manager (answer.name, answer.email, answer.id, answer.officeNumber);
        team.push(manager);
        console.log(manager);
    })
};

const employeeQuestion = () => {
    console.log(`
    ~~~~~~~~~~~~~~~~~~~~~~~
    Add Any More Employees?
    ~~~~~~~~~~~~~~~~~~~~~~~
    `);
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: `What is this employee's role?`,
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: `What is the employee's name?`,
        },
        {
            type: 'input',
            name: 'email',
            message: `What is the employee's email?`,
        },
        {
            type: 'input',
            name: 'id',
            message: `What is the employee's id?`,
        },
        {
            type: 'input',
            name: 'github',
            message: `Please provide engineer's github username`,
            when: (input) => input.role === 'Engineer',
        },
        {
            type: 'input',
            name: 'school',
            message: `Please provide intern's school`,
            when: (input) => input.role === 'Intern',
        },
        {
            type: 'confirm',
            name: 'confirmAdd',
            message: "Are there any more employees to add?",
            default: false
        }
    ])
    .then(answer => {
        let { name, email, id, role, github, school, confirmAdd } = answer;
        let employee = answer;
        if (role === "Engineer") {
            employee = new Engineer (answer.name, answer.email, answer.id, answer.github);
            console.log(employee);
        }
        else if (role === "Intern") {
            employee = new Intern (answer.name, answer.email, answer.id, answer.school);
            console.log(employee);
        }
        team.push(employee);
        if (confirmAdd) {
            return promptEmployee(team);
        } else {
            console.log(team);
            return team;
        }
    })
};