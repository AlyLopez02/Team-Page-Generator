// Imports
const Manager = require('./lib/manager'); //apparently not done correctly
const Engineer = require('./lib/engineer'); //apparently not done correctly
const Intern = require('./lib/intern'); //apparently not done correctly

const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const generateHTML = require('./src/page-template');

// I am unsure about these
const outputFolder = './dist';
const fileName = 'team-page.html';

const teamMembers = [];
const employeeIds = [];

// Functions
createManagerFunction();

function createManagerFunction() {
    console.info("Hello user! Please answer the questions below to create your team's very own web page!")

    inquirer.prompt([
        {
            type: 'input',
            message: "What is the manager's name?",
            name: 'name'
        },
        {
            type: 'input',
            message: "What is the manager's id?",
            name: 'id'
        },
        {
            type: 'input',
            message: "What is the manager's email?",
            name: 'email'
        },
        {
            type: 'input',
            message: "What is the manager's office number?",
            name: 'officeNumber'
        }
    ]).then(function (data) {
        const managerObj = new Manager(data); //THIS MIGHT NEED TO BE EACH THING SEPARATELY AKA data.name, data.id, ....
        teamMembers.push(managerObj);
        employeeIds.push(managerObj.id);
        createTeam();
    })
};

function createTeam() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Please select which type of employee you would like to add or select exit if you are done creating your team.',
            name: 'choice',
            choices: ['Engineer', 'Intern', 'Exit']
        }
    ]).then(function (data) {
        if (data.choice === 'Engineer') {
            addEngineer();
        } else if (data.choice === 'Intern') {
            addIntern();
        } else {
            buildTeam();
        }
    })
};

function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the engineer's name?",
            name: 'name',
        },
        {
            type: 'input',
            message: "What is the engineer's id?",
            name: 'id'
        },
        {
            type: 'input',
            message: "What is the engineers's email?",
            name: 'email'
        },
        {
            type: 'input',
            message: "What is the engineer's GitHub username?",
            name: 'github'
        }
    ]).then(function (data) {
        const engineerObj = new Engineer(data); //THIS MIGHT NEED TO BE EACH THING SEPARATELY AKA data.name, data.id, ....
        teamMembers.push(engineerObj);
        employeeIds.push(engineerObj.id);
        createTeam();
    })

};

function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the intern's name?",
            name: 'name',
        },
        {
            type: 'input',
            message: "What is the intern's id?",
            name: 'id'
        },
        {
            type: 'input',
            message: "What is the intern's email?",
            name: 'email'
        },
        {
            type: 'input',
            message: "What is the intern's school?",
            name: 'github'
        }
    ]).then(function (data) {
        const internObj = new Intern(data); //THIS MIGHT NEED TO BE EACH THING SEPARATELY AKA data.name, data.id, ....
        teamMembers.push(internObj);
        employeeIds.push(internObj.id);
        createTeam();
    })
};

function buildTeam() {
    generateHTML(teamMembers);

    // NOT DONE YET ALDSIHGALIDFGLAKJLDGJFAJDFL;
};