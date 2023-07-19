import { capitalizeFirstLetter } from ".";

describe("Test Generic Text Utils", () => {
  it("capitalizes the first letter of a string", () => {
    // return empty string if empty or null
    // @ts-ignore
    expect(capitalizeFirstLetter(null)).toEqual("");
    expect(capitalizeFirstLetter(undefined)).toEqual("");
    expect(capitalizeFirstLetter("")).toEqual("");

    // formats as intended
    expect(capitalizeFirstLetter("asdf")).toEqual("Asdf");
    expect(capitalizeFirstLetter("ASDF")).toEqual("ASDF");
    expect(capitalizeFirstLetter("123")).toEqual("123");
    expect(capitalizeFirstLetter("<>:>>::;;[]")).toEqual("<>:>>::;;[]");
  });
});
