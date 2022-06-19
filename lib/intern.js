const Employee = require('./employee');

class Intern extends Employee {
    constructor(id, name, email, school) {
        super(id, name, email);
        this.school = school; //not sure if this one is correct
    };

    getSchool(){
        return this.school;
    };

    getRole(){
        return 'Intern'
    };

}

module.exports = Intern;