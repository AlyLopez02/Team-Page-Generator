const Employee = require("../lib/Employee");

describe("Employee", () => {

// test instantiation of employee instance
test("Employee class should create an object", () => {
    expect(new Employee()).toBeInstanceOf(Employee);
});

// test constructor initialized with a name
test("Constructor initialized with a name", () => {
    const name = 'Joel';

    let obj = new Employee(name);

    expect(obj.name).toBe('Joel');
});

// test constructor initialized with an id
test("Constructor initialized with an id", () => {
    const id = '123456789';

    let obj = new Employee(id);

    expect(obj.id).toBe('123456789');
});

// test constructor initialized with an email address
test("Constructor initialized with an email address", () => {
    const emailAddress = 'johndoe@placeholder.com';

    let obj = new Employee(emailAddress);

    expect(obj.emailAddress).toBe('johndoe@placeholder.com');
});

// test get name method
test("getName() should return this.name", () => {

    const name = 'Joel';

    let obj = new Employee(name);

    this.name = obj.name;

    expect(Employee.getName()).toBe('Joel'); //I am unsure if this is correct

});

// test get Id method
test("getId() should return this.id", () => {

    const id = '123';

    let obj = new Employee(id);

    this.id = obj.id;

    expect(Employee.getId()).toBe('123'); //I am unsure if this is correct

});

// test get email method
test("getEmail() should return this.email", () => {

    const email = 'joel@placeholder.com';

    let obj = new Employee(email);

    this.email = obj.email;

    expect(Employee.getEmail()).toBe('joel@placeholder.com'); //I am unsure if this is correct

});

// test get role method. it should return "Employee"
test("getRole() should return 'Employee'", () => {
    expect(Employee.getRole()).toBe('Employee');
});


    
})