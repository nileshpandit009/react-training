import { capitalize } from "../stringUtilities";

describe("capitalize_util", () => {
  it('must return "Test" for "test" as input', () => {
    expect(capitalize("test")).toBe("Test");
  });

  it('must return "Test" for "TEST" as input', () => {
    expect(capitalize("TEST")).toBe("Test");
  });

  it('must return "Test123" for "TeSt123" as input', () => {
    expect(capitalize("TeSt123")).toBe("Test123");
  });

  it('must return "Test@%%##$123" for "TeSt@%%##$123" as input', () => {
    expect(capitalize("TeSt@%%##$123")).toBe("Test@%%##$123");
  });

  it('must return "Test Test Test 123 @@@###" for "TeSt TEST test 123 @@@###" as input', () => {
    expect(capitalize("TeSt TEST test 123 @@@###")).toBe(
      "Test Test Test 123 @@@###"
    );
  });

  it("must return empty string for falsy inputs", () => {
    expect(capitalize(null)).toBe("");
    expect(capitalize(undefined)).toBe("");
    expect(capitalize(0)).toBe("");
    expect(capitalize(false)).toBe("");
    expect(capitalize("")).toBe("");
  });
});
