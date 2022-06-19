const Employee = require('./employee');

class Engineer extends Employee {
    constructor(id, name, email, github) {
        super(id, name, email);
        this.github = github; //not sure if this one is correct
    };

    getGitHub(){
        return this.github;
    };

    getRole(){
        return 'Engineer'
    };
}

module.exports = Engineer;