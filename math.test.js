const { add, sub, mult, div } = require("./math");

it("will correctly add numbers", () => {
  expect(add(6, 2)).toEqual(8);
  expect(add(1, 2)).toEqual(3);
  expect(add(0, 12)).toEqual(12);
  expect(add(-2, -3)).toEqual(-5);
});

it("will correctly subtract numbers", () => {
  expect(sub(6, 2)).toEqual(4);
  expect(sub(1, 2)).toEqual(-1);
  expect(sub(0, 2)).toEqual(-2);
  expect(sub(-2, -3)).toEqual(1);
});

it("will correctly multiply numbers", () => {
  expect(mult(6, 2)).toEqual(12);
  expect(mult(4, 5)).toEqual(20);
  expect(mult(1, 5)).toEqual(5);
  expect(mult(0, 8)).toEqual(0);
  expect(mult(-2, -3)).toEqual(6);
});

it("will correctly divide numbers", () => {
  expect(div(6, 2)).toEqual(3);
  expect(div(8, 2)).toEqual(4);
  expect(div(1, 2)).toEqual(0.5);
  expect(div(0, 10)).toEqual(0);
  expect(() => div(100, 0)).toThrow("Can't divide by 0");
});
