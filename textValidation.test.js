const {
  generateText,
  validateText,
  validateAndReturn,
} = require("./textValidation");

describe("generateText works", () => {
  it("should output dog name and breed", () => {
    const dogName = "Lav";
    const breed = "posavski gonic";

    expect(generateText(dogName, breed)).toBe("Lav is a posavski gonic");
  });
});

describe("validateText works", () => {
  it("returns true when text input is a string", () => {
    const text = "neki text";
    expect(validateText(text)).toBe(true);
  });

  it("returns false when input is a empty string", () => {
    const input = "";
    expect(validateText(input)).toBe(true);
  });

  it("returns false when input is a number", () => {
    const input = 9;
    expect(validateText(input)).toBe(false);
  });
});

describe("validateAndReturn works", () => {
  it("should output dog name and breed", () => {
    const dogName = "Lav";
    const breed = "posavski gonic";
    expect(validateAndReturn(dogName, breed)).toBe("Lav is a posavski gonic");
  });
});
