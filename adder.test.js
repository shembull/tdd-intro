const adder = require("./adder");

describe("adder", () => {
  it("shoud add two numbers", () => {
    expect(adder(1, 2)).toBe(3);
  });
  it("should return a sole input", () => {
    expect(adder(5)).toBe(5);
  });
  it("should add three numbers", () => {
    expect(adder(1, 2, 3)).toBe(6);
  });
  it("should return 0 if no numbers are passed", () => {
    expect(adder()).toBe(0);
  });
  it("should add any number of arguments", () => {
    expect(adder(1, 2, 3, 4, 5, 6)).toBe(21);
  });
});
