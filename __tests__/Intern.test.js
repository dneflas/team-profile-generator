const Intern = require('../lib/Intern');

test('create intern class', () => {
    const intern = new Intern('Olivia', '543762', 'olivia@awesome.com', 'UCLA');

    expect(intern.name).toEqual('Olivia');
    expect(intern.id).toEqual('543762');
    expect(intern.email).toEqual('olivia@awesome.com');
    expect(intern.school).toEqual('UCLA');
});

test('return intern school', () => {
    const intern = new Intern('Olivia', '543762', 'olivia@awesome.com', 'UCLA');

    expect(intern.getSchool()).toEqual('UCLA');
});

test('role overriden to Intern', () => {
    const intern = new Intern('Olivia', '543762', 'olivia@awesome.com', 'UCLA');

    expect(intern.getRole()).toEqual('Intern');
});