const Employee = require("../lib/Employee");

describe("Employee", () => {

// test instantiation of employee instance
test("Employee class should create an object", () => {
    let obj = new Employee();
    expect(typeof(obj)).toBe("object");
});

// test constructor initialized with a name
test("Constructor initialized with a name", () => {
    const name = 'Joel';

    let obj = new Employee(name);

    expect(obj.name).toBe(name);
});

// test constructor initialized with an id
test("Constructor initialized with an id", () => {
    const id = '100';

    let obj = new Employee("Polly", id);

    expect(obj.id).toBe(id);
});

// test constructor initialized with an email address
test("Constructor initialized with an email address", () => {
    const email = 'joel@placeholder.com';

    let obj = new Employee("Joel", 100, email);

    expect(obj.email).toBe(email);
});

// test get name method
test("getName() should return this.name", () => {

    const name = 'Joel';

    let obj = new Employee(name);

    expect(obj.getName()).toBe(name); //I am unsure if this is correct

});

// test get Id method
test("getId() should return this.id", () => {

    const id = '100';

    let obj = new Employee("Joel", id);

    expect(obj.getId()).toBe(id); //I am unsure if this is correct

});

// test get email method
test("getEmail() should return this.email", () => {

    const email = 'joel@placeholder.com';

    let obj = new Employee("Joel", 100, email);

    expect(obj.getEmail()).toBe(email); //I am unsure if this is correct

});

// test get role method. it should return "Employee"
test("getRole() should return 'Employee'", () => {
    const testValue = 'Employee';

    let obj = new Employee("Joel", 100, 'joel@placeholder.com')

    expect(obj.getRole()).toBe('Employee');
});


    
})