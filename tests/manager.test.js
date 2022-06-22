const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

// test constructor to set office number
test("Constructor sets github username", () => {
    const officeNumber = 222

    let obj = new Manager("Joel", 100, 'joel@placeholder.com', officeNumber);

    expect(obj.officeNumber).toBe(officeNumber);
});

// test get office number method
test("getOfficeNumber() should return office number", () => {
    const officeNumber = 222;

    let obj = new Manager("Joel", 100, 'joel@placeholder.com', officeNumber);

    expect(obj.getOfficeNumber()).toBe(officeNumber)
});

// test get role method. it should return "Manager"
test("getRole() should return 'Manager'", () => {
    const testValue = 'Manager';

    let obj = new Manager("Joel", 100, 'joel@placeholder.com', 222);
    
    expect(obj.getRole()).toBe(testValue);
});