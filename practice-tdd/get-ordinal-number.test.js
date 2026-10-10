import { getOrdinalNumber } from "./get-ordinal-number.js";
// In this week's prep, we started implementing getOrdinalNumber.

// Continue testing and implementing getOrdinalNumber for additional cases.
// Write your tests using Jest — remember to run your tests often for continual feedback.

// To ensure thorough testing, we need broad scenarios that cover all possible cases.
// Listing individual values, however, can quickly lead to an unmanageable number of test cases.
// Instead of writing tests for individual numbers, consider grouping all possible input values
// into meaningful categories. Then, select representative samples from each category to test.
// This approach improves coverage and makes our tests easier to maintain.

// Case 1: Numbers ending with 1 (but not 11)
// When the number ends with 1, except those ending with 11,
// Then the function should return a string by appending "st" to the number.
test("should append 'st' for numbers ending with 1, except those ending with 11", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
  expect(getOrdinalNumber(21)).toEqual("21st");
  expect(getOrdinalNumber(131)).toEqual("131st");
});
// Case 2: Numbers ending with 2 (but not 12)
test("should append 'nd' for numbers ending with 2, except 12", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
  expect(getOrdinalNumber(22)).toEqual("22nd");
  expect(getOrdinalNumber(132)).toEqual("132nd");
});
// Case 3: Numbers ending with 3 (but not 13)
test("should append 'rd' for numbers ending with 3, except 13", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
  expect(getOrdinalNumber(23)).toEqual("23rd");
  expect(getOrdinalNumber(133)).toEqual("133rd");
});
// Case 4: Numbers ending with "th" including the special case (11,12,13)
test(`Numbers ending with "th" including the special case (11,12,13)`, () => {
  expect(getOrdinalNumber(10)).toEqual("10th");
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(12)).toEqual("12th");
  expect(getOrdinalNumber(13)).toEqual("13th");
  expect(getOrdinalNumber(14)).toEqual("14th");
  expect(getOrdinalNumber(5)).toEqual("5th");
  expect(getOrdinalNumber(4)).toEqual("4th");
});
// Case 5: Numbers greater than 100 ending with "th"
test(`Numbers greater than 100 ending with "th"`, () => {
  expect(getOrdinalNumber(100)).toEqual("100th");
  expect(getOrdinalNumber(104)).toEqual("104th");
  expect(getOrdinalNumber(110)).toEqual("110th");
  expect(getOrdinalNumber(255)).toEqual("255th");
  expect(getOrdinalNumber(999)).toEqual("999th");
  expect(getOrdinalNumber(1000)).toEqual("1000th");
});
// Case 6: Numbers greater than 100 with the special case (111, 112, 113)
test(`Numbers greater than 100 ending in 11, 12, 13 use "th"`, () => {
  expect(getOrdinalNumber(111)).toEqual("111th");
  expect(getOrdinalNumber(112)).toEqual("112th");
  expect(getOrdinalNumber(113)).toEqual("113th");
  expect(getOrdinalNumber(211)).toEqual("211th");
  expect(getOrdinalNumber(312)).toEqual("312th");
  expect(getOrdinalNumber(1013)).toEqual("1013th");
});