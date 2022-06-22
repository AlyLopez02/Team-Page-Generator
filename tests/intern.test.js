const Intern = require("../lib/Intern");

// test constructor to set school
test("Constructor sets school", () => {
    const school = 'Rutgers';

    let obj = new Intern("Joel", 100, 'joel@placeholder.com', school);

    expect(obj.school).toBe(school);
});

// test get school method
test("getSchool() should return school", () => {
    const school = 'Rutgers';

    let obj = new Intern("Joel", 100, 'joel@placeholder.com', school);

    expect(obj.getSchool()).toBe(school);
});

// test get role method.
test("getRole() should return 'Intern'", () => {
    const school = 'Rutgers';

    let obj = new Intern("Joel", 100, 'joel@placeholder.com', school);
    
    expect(obj.getRole()).toBe('Intern');
});