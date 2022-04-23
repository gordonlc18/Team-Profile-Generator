const Engineer = require('../lib/Engineer');
const {test, expect} = require('@jest/globals');

// creating engineer object  
test('creates an Engineer object', () => {
    const engineer = new Engineer('Latravia', 30, 'latravia@latravia.com', 'gordonlc18');
    
    expect(engineer.github).toEqual(expect.any(String));
});

// gets github from getGithub()
test('gets engineer github value', () => {
    const engineer = new Engineer('Latravia', 30, 'latravia@latravia.com', 'gordonlc18');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// gets role from getRole() 
test('gets role of employee', () => {
    const engineer = new Engineer('Latravia', 30, 'latravia@latravia.com', 'gordonlc18');

    expect(engineer.getRole()).toEqual("Engineer");
});