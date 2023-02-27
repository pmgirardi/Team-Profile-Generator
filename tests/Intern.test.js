const Intern = require('../lib/intern');

test('creates intern object', () => {
    const intern = new Intern('Paige', 92, 'girardipm@gmail.com', 'ASU');
    
    expect(intern.school) .toEqual(expect.any(String));
});

test('gets employee school', () => {
    const intern = new Intern('Paige', 92, 'girardipm@gmail.com', 'ASU');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});


test('gets role of employee', () => {
    const intern = new Intern('Paige', 92, 'girardipm@gmail.com.com', 'ASU');

    expect(intern.getRole()).toEqual("Intern");
}); 