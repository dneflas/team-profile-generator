const Manager = require('../lib/Manager');

test("create intern class", () => {
    const manager = new Manager('Amanda', '4567890', 'amanda@awesome.com', '310-555-5555');

    expect(manager.name).toEqual('Amanda');
    expect(manager.id).toEqual('4567890');
    expect(manager.email).toEqual('amanda@awesome.com');
    expect(manager.officeNumber).toEqual('310-555-5555');
});

test("returns manager's office number", () => {
    const manager = new Manager('Amanda', '4567890', 'amanda@awesome.com', '310-555-5555');
    expect(manager.getOfficeNumber()).toEqual('310-555-5555');
})

test('role overridden to return Manager', () =>{
    const manager = new Manager('Amanda', '4567890', 'amanda@awesome.com', '310-555-5555');

    expect(manager.getRole()).toEqual('Manager');
});