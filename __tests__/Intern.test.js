const Intern = require('../lib/Intern');
const {test, expect} = require('@jest/globals');

// creating intern object  
test('creates an Intern object', () => {
    const intern = new Intern('Latravia', 30, 'latravia@latravia.com', 'UNC at Chapel Hill');
    
    expect(intern.school).toEqual(expect.any(String));
});

// gets school from getSchool()
test('gets employee school', () => {
    const intern = new Intern('Latravia', 30, 'latravia@latravia.com', 'UNC at Chapel Hill');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets role from getRole()
test('gets role of employee', () => {
    const intern = new Intern('Latravia', 30, 'latravia@latravia.com.com', 'UNC at Chapel Hill');

    expect(intern.getRole()).toEqual("Intern");
}); 