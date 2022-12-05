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
            return employeeQuestion(team);
        } else {
            console.log(team);
            return team;
        }
    })
};

const generateWebpage = () => {
    outputHTML = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team!</title>
            <link rel="stylesheet" type="text/css" href="./assets/css/style.css">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        </head>
        <body>
            <section id="services">
                <div class="container">
                    <h1 class="text-center">Team</h1>
                </div>
            </section>
            <section class="container d-flex flex-wrap gap-5 justify-content-center">`;
    team.forEach(employee => {
        generateProfile(employee);
    });
    outputHTML +=  `
        </section>
        </body>
    </html>
    `;
    fs.writeFile(`./public/team.html`, outputHTML, error => {
        if (error) {
            console.log(error);
        } else {
            console.log(`Team Created!`);
        }
    });
};

const generateProfile = employee => {
    outputHTML += `
    <div class="card">
        <div class="card-header bg-dark text-white">
            <h2>${employee.name}</h2>
            <div class="title">${employee.getRole()}</div>
        </div>
        <div class="card-body">
            <table class="table">
                <tr>
                    <td>ID: ${employee.id}</td>
                </tr>
                <tr>
                    <td>eMail: <a href="mailto:${employee.email}">${employee.email}</a></td>
                </tr>
                <tr>`;
    switch (employee.getRole()) {
        case 'Manager':
            outputHTML += `<td>Office Number: ${employee.officeNumber}</td>`;
            break;
        case 'Engineer':
            outputHTML += `<td>GitHub: <a href="https://www.github.com/${employee.github}/">${employee.github}</a></td>`;
            break;
        case 'Intern':
            outputHTML += `<td>School: ${employee.school}</td>`;
            break;
    }
    outputHTML += `
                </tr>
            </table>
        </div>
    </div>`
};

managerQuestion().then(employeeQuestion).then(team => {
    return generateWebpage(team);
}).catch(err => {
    console.log(err);
});