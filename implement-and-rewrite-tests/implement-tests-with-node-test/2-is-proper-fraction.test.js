import assert from "node:assert";
import test from "node:test";

import { isProperFraction } from "../implement/2-is-proper-fraction.js";

// TODO: Write tests to cover all cases.
// What combinations of numerators and denominators should you test?

test("Basic proper fraction", () => {
  // Example: 1/2 is a proper fraction
  assert.equal(isProperFraction(1, 2), true);
});
// improper fraction
test("numerator larger than denominator", () => {
  assert.equal(isProperFraction(2, 1), false);
});
test("numerator equal to denominator", () => {
  assert.equal(isProperFraction(1, 1), false);
});
// negative numerator
test("negative numerator, positive denominator, proper", () => {
  assert.equal(isProperFraction(-1, 2), true);
});
test("negative numerator, positive denominator, improper", () => {
  assert.equal(isProperFraction(-3, 2), false);
});
// negative denominator
test("positive numerator, negative denominator, proper", () => {
  assert.equal(isProperFraction(1, -2), true);
});
test("positive numerator, negative denominator, improper", () => {
  assert.equal(isProperFraction(3, -2), false);
});
// both negative
test("both negative, proper", () => {
  assert.equal(isProperFraction(-1, -2), true);
});
test("both negative, improper", () => {
  assert.equal(isProperFraction(-3, -2), false);
});
test("both negative, equal", () => {
  assert.equal(isProperFraction(-2, -2), false);
});
// zero numerator
test("zero numerator, positive denominator", () => {
  assert.equal(isProperFraction(0, 5), true);
});
test("zero numerator, negative denominator", () => {
  assert.equal(isProperFraction(0, -5), true);
});
// zero denominator
test("zero denominator, positive numerator", () => {
  assert.equal(isProperFraction(5, 0), false);
});
test("zero denominator, negative numerator", () => {
  assert.equal(isProperFraction(-5, 0), false);
});
test("zero numerator and zero denominator", () => {
  assert.equal(isProperFraction(0, 0), false);
});
