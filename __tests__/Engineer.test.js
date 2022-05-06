const Engineer = require('../lib/Engineer');

test('create Engineer class', () =>{
    const engineer = new Engineer('Tawnya', '987654', 'tawnya@awesome.com', 'tbeezy');

    expect(engineer.name).toEqual('Tawnya');
    expect(engineer.id).toEqual('987654');
    expect(engineer.email).toEqual('tawnya@awesome.com');
    expect(engineer.github).toEqual('tbeezy');
});

test('return github username', () =>{
    const engineer = new Engineer('Tawnya', '987654', 'tawnya@awesome.com', 'tbeezy');

    expect(engineer.getGithub()).toEqual('tbeezy');
});

test('role overriden to Engineer', () =>{
    const engineer = new Engineer('Tawnya', '987654', 'tawnya@awesome.com', 'tbeezy');

    expect(engineer.getRole()).toEqual('Engineer');
});