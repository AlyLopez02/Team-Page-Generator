// Imports
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');

const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

// import page template function & assign to a variable

const teamMembers = [];

const employeeIds = [];

// Functions
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