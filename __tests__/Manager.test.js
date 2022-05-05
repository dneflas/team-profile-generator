const Manager = require('../lib/Manager');

test("returns manager's office number", () => {
    const manager = new Manager('Amanda', '4567890', 'amanda@awesome.com', '310-555-5555');

    expect(manager.officeNumber).toHaveLength(12);
});

test('role overriden to return Manager', () =>{
    const manager = new Manager('Amanda', '4567890', 'amanda@awesome.com', '310-555-5555');

    expect(manager.getRole()).toEqual('Manager');
});