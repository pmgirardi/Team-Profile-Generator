const Manager = require('../lib/manager');


test('creates manager object', () => {
    const manager = new Manager('Paige', 92, 'girardipm@gmail.com', 7);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});


test('gets role of employee', () => {
    const manager = new Manager('Paige', 92, 'girardipm@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 
