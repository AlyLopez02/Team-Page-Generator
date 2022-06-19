// Imports
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const pageTemplate  = require('./src/page-template');

// I am unsure about these
// const outputFolder = ;
// const fileName = 'team-page.html';

const teamMembers = [];
const employeeIds = [];

// Functions

function managerFunction (){
    inquirer.prompt([
    {
        type: '',
        message: '',
        name: ''
    },
    {
        type: '',
        message: '',
        name: ''
    }
])
}
