const Engineer = require("../lib/Engineer");

// test constructor to set github user
test("Constructor sets github username", () => {
    const github = 'Joel220';

    let obj = new Engineer("Joel", 100, 'joel@placeholder.com', github);

    expect(obj.github).toBe(github);
});

// test get github method. it should return github username
test("getGitHub() should return github username", () => {
    const github = 'Joel220';

    let obj = new Engineer("Joel", 100, 'joel@placeholder.com', github);

    expect(obj.getGitHub()).toBe(github);
});

// test get role method. it should return Engineer
test("getRole() should return 'Engineer'", () => {
    const testValue = 'Engineer';

    let obj = new Engineer("Joel", 100, 'joel@placeholder.com', 'Joel220')

    expect(obj.getRole()).toBe(testValue);
});