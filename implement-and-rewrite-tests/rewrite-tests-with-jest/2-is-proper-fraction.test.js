import { isProperFraction } from "../implement/2-is-proper-fraction.js";

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test("should return true when numerator is zero and denominator is positive", () => {
  expect(isProperFraction(0, 5)).toEqual(true);
});
test(`should return true when numerator is zero and denominator is negative`, () => {
  expect(isProperFraction(0, -1)).toEqual(true);
});
// Special case: denominator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});
test("should return false when denominator is 0 and numerator is negative", () => {
  expect(isProperFraction(-1, 0)).toEqual(false);
});
// Special case: Positive numerator, negative denominator
test(`should return false when numerator and denominator are equal in size and denominator is negative`, () => {
  expect(isProperFraction(1, -1)).toEqual(false);
});
test("should return true when numerator is positive, denominator is negative and numerator is smaller in size", () => {
  expect(isProperFraction(1, -2)).toEqual(true);
  });
  // Special case: Both zero
test(`should return false when both denominator & numerator are zero`, () => {
  expect(isProperFraction(0, 0)).toEqual(false);
});
// Special case:Negative numerator, negative denominator
test(`should return true when both are negative and numerator is smaller in size`, () => {
  expect(isProperFraction(-3, -6)).toEqual(true);
});
test("should return false when both are negative and numerator is larger in size", () => {
  expect(isProperFraction(-6, -3)).toEqual(false);
});
// Special case:Negative numerator, positive denominator
test("should return true when numerator is negative, denominator is positive and numerator is smaller in size", () => {
  expect(isProperFraction(-1, 2)).toEqual(true);
});
test("should return false when numerator is negative, denominator is positive and numerator is larger in size", () => {
  expect(isProperFraction(-3, 2)).toEqual(false);
});
