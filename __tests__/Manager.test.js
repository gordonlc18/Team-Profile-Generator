const Manager = require('../lib/Manager');
const {test, expect} = require('@jest/globals');

// creating manager object  
test('creates an Manager object', () => {
    const manager = new Manager('Latravia', 30, 'latravia@latravia.com', 8);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Latravia', 30, 'latravia@latravia.com.com');

    expect(manager.getRole()).toEqual("Manager");
}); 