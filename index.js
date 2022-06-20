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
]).then((response) => {
    // create manager object from manager class by initializing it with the properties in answer object
    // push manager object to the empty team memeber object array
    // push the manager's id to the empty id array
    createTeam();
})
};

function createTeam(){
    inquirer.prompt([
        {
            type: 'list',
            message: 'Please select which type of employee you would like to add or select exit if you are done creating your team.',
            name: '',  //DO NOT FORGET TO ADD A NAME HERE! IDK WHAT TO CALL IT YET BUT DONT FORGET
            choices: ['Engineer', 'Intern', 'Exit']
        }
    ]).then((response) => {
        if (response == 'Engineer'){
            addEngineer();
        } else if (response == 'Intern'){
            addIntern();
        } else {
            buildTeam();
        }
    })
};

function addEngineer(){

};

function addIntern(){

};

function buildTeam(){

};