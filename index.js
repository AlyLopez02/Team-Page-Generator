// Imports
const Manager = require('./lib/manager'); //apparently not done correctly
const Engineer = require('./lib/engineer'); //apparently not done correctly
const Intern = require('./lib/intern'); //apparently not done correctly

const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const pageTemplate  = require('./src/page-template'); //apparently not done correctly either

// I am unsure about these
// const outputFolder = ;
// const fileName = 'team-page.html';

const teamMembers = [];
const employeeIds = [];

// Functions
createManagerFunction();

function createManagerFunction (){
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
]).then()
}

