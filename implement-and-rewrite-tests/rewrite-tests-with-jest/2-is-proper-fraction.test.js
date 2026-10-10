import { isProperFraction } from "../implement/2-is-proper-fraction.js";

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});
test(`should return true when numerator is zero and denominator is negative`, () => {
  expect(isProperFraction(0, -1)).toEqual(true);
});
test(`should return false when numerator and denominator are equal in size and denominator is negative`, () => {
  expect(isProperFraction(1, -1)).toEqual(false);
});
test(`should return false when both denominator & numerator are zero`, () => {
  expect(isProperFraction(0, 0)).toEqual(false);
});
test(`should return true when both are negative and numerator is smaller in size`, () => {
  expect(isProperFraction(-3, -6)).toEqual(true);
});
test("should return false when denominator is 0 and numerator is negative", () => {
  expect(isProperFraction(-1, 0)).toEqual(false);
});
