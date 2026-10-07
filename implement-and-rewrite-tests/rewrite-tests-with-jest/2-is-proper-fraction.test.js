import { isProperFraction } from "../implement/2-is-proper-fraction.js";

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});
test(`should return false when numerator is (-)`, () => {
  expect(isProperFraction(0, -1)).toEqual(false);
});
test(`should return false when denominator is (-1)`, () => {
  expect(isProperFraction(1, -1)).toEqual(false);
});
test(`should return false when both denominator & numerator are zero`, () => {
  expect(isProperFraction(0, 0)).toEqual(false);
});
test(`should return false when both numerator is (-)`, () => {
  expect(isProperFraction(-3, -6)).toEqual(false);
});
test(`should return false when numerator is (-)`, () => {
  expect(isProperFraction(-1, 0)).toEqual(true);
});
