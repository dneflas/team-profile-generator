const Engineer = require('../lib/Engineer');

test('create Engineer class', () =>{
    const engineer = new Engineer('Tawnya', '987654', 'tawnya@awesome.com', 'tbeezy');

    expect(engineer.github).toBe(expect.any(String));
});

test('return github username', () =>{
    const engineer = new Engineer('Tawnya', '987654', 'tawnya@awesome.com', 'tbeezy');

    expect(engineer.getGithub()).toEqual(engineer.githuhb);
});

test('role overriden to Engineer', () =>{
    const engineer = new Engineer('Tawnya', '987654', 'tawnya@awesome.com', 'tbeezy');

    expect(engineer.getRole()).toEqual('Engineer');
});
