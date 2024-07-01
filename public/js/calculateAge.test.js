import { describe, it, expect } from "vitest";
import { calculateYearsToDoubleAge } from "./calculateAge.js";

describe("calculateYearsToDoubleAge", () => {
  it("should return 22 for father: 36 and son: 7", () => {
    expect(calculateYearsToDoubleAge(36, 7)).toBe(22);
  });

  it("should return 5 for father: 55 and son: 30", () => {
    expect(calculateYearsToDoubleAge(55, 30)).toBe(5);
  });

  it("should return 0 for father: 42 and son: 21", () => {
    expect(calculateYearsToDoubleAge(42, 21)).toBe(0);
  });

  it("should return 19 for father: 22 and son: 1", () => {
    expect(calculateYearsToDoubleAge(22, 1)).toBe(19);
  });

  it("should return 29 for father: 29 and son: 0", () => {
    expect(calculateYearsToDoubleAge(29, 0)).toBe(29);
  });
});
