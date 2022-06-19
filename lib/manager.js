const Employee = require('./employee');

class Manager extends Employee {
    constructor(id, name, email, officeNumber) {
        super(id, name, email);
        this.officeNumber = officeNumber; //not sure if this one is correct
    };

    getOfficeNumber(){
        return this.officeNumber;
    };

    getRole(){
        return 'Manager'
    };

}

module.exports = Manager;