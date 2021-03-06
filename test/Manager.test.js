const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

//FAILING
test("Can set office number via constructor argument", () => 
{
  const testValue = 100;
  const e = new Manager("Subzero", 1, "test@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

//FAILING
test('getRole() should return "Manager"', () => 
{
  const testValue = "Manager";
  const e = new Manager("Subzero", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});

//FAILING
test("Can get office number via getOffice()", () => 
{
  const testValue = 100;
  const e = new Manager("Subzero", 1, "test@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});
