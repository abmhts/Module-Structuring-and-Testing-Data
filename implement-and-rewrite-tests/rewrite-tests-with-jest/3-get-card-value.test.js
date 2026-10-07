import { getCardValue } from "../implement/3-get-card-value.js";

// TODO: Write tests in Jest syntax to cover all possible outcomes.

// Case 1: Ace (A)
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
});

// Suggestion: Group the remaining test data into these categories:
//   Number Cards (2-10)
test(`should return its numeric value When the card is a number card ("2" to "10")`, () => {
  expect(getCardValue("2♠")).toEqual(2);
  expect(getCardValue("3♣")).toEqual(3);
  expect(getCardValue("4♦")).toEqual(4);
  expect(getCardValue("5♠")).toEqual(5);
  expect(getCardValue("6♣")).toEqual(6);
  expect(getCardValue("7♦")).toEqual(7);
  expect(getCardValue("8♠")).toEqual(8);
  expect(getCardValue("9♣")).toEqual(9);
});

//   Face Cards (J, Q, K)

test("When the card is a face card (J, Q, K), the function should return 10", () => {
  expect(getCardValue("J♠")).toEqual(10);
  expect(getCardValue("Q♥")).toEqual(10);
  expect(getCardValue("K♦")).toEqual(10);
});

//   Invalid Cards

test("Invalid card cases", () => {
  expect(() => getCardValue("1♠")).toThrow();
  expect(() => getCardValue("11♠")).toThrow();
  expect(() => getCardValue("X♠")).toThrow();
  expect(() => getCardValue("A")).toThrow();
  expect(() => getCardValue("2")).toThrow();
  expect(() => getCardValue("2X")).toThrow();
  expect(() => getCardValue("")).toThrow();
});

// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror
