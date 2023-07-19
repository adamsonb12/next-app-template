import { isValidEmail } from ".";

describe("email tests", () => {
  it("check that email is valid", () => {
    const email = "jason@jason.com";
    expect(isValidEmail(email)).toBe(true);
    const email2 = "jason+34@gmail.com";
    expect(isValidEmail(email2)).toBe(true);
    const invalidEmail = "jason+34@@gmail.com";
    expect(isValidEmail(invalidEmail)).toBe(false);
    const invalidEmail1 = "jason+34@gmail";
    expect(isValidEmail(invalidEmail1)).toBe(false);
    const invalidEmail2 = "asdf";
    expect(isValidEmail(invalidEmail2)).toBe(false);
    const invalidEmail3 = ".com";
    expect(isValidEmail(invalidEmail3)).toBe(false);
  });
});
