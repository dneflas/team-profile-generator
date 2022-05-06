const Employee = require('../lib/Employee');

test('create an Employee parent class', () => {
    const employee = new Employee('Melanie', '1234567', 'melanie@awesome.com');
    
    expect(employee.name).toEqual('Melanie');
    expect(employee.id).toEqual('1234567');
    expect(employee.email).toEqual('melanie@awesome.com');
});

test("returns employee's name", () => {
    const employee = new Employee('Melanie', '1234567', 'melanie@awesome.com');

    expect(employee.getName()).toEqual('Melanie');
});

test ("returns employee's id number", () => {
    const employee = new Employee('Melanie', '1234567', 'melanie@awesome.com');

    expect(employee.getId()).toEqual('1234567');
});

test ("returns employee's phone number", () => {
    const employee = new Employee('Melanie', '1234567', 'melanie@awesome.com');

    expect(employee.getEmail()).toEqual('melanie@awesome.com');
});

test ("returns employee's role", () => {
    const employee = new Employee('Melanie', '1234567', 'melanie@awesome.com');

    expect(employee.getRole()).toEqual('Employee');
});