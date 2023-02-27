const Engineer = require("../lib/engineer");
 
 
    test('creates engineer object', () => {
        const engineer = new Engineer('Paige', 92, 'girardipm@gmail.com', 'PaigeGirardi');

      expect(engineer.github) .toEqual(expect.any(String));
    });
 
    test('gets engineer github value', () => {
      const engineer = new Engineer('Paige', 92, 'girardipm@gmail.com', 'PaigeGirardi');

      expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
    });
 
    test('gets role of employee', () => {
      const engineer = new Engineer('Paige', 92, 'girardipm@gmail.com', 'PaigeGirardi');

      expect(engineer.getRole()).toEqual("Engineer");
    });