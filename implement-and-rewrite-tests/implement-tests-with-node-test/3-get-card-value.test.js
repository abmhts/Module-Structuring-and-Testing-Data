import assert from "node:assert";
import test from "node:test";

import { getCardValue } from "../implement/3-get-card-value.js";

// TODO: Write tests to cover all outcomes, including throwing errors for invalid cards.

test("Valid single-digit card", () => {
  assert.equal(getCardValue("9♠"), 9);
});

test("When the card is an ace (A), the function should return 11", () => {
  assert.equal(getCardValue("A♠"), 11);
  assert.equal(getCardValue("A♥"), 11);
  assert.equal(getCardValue("A♦"), 11);
  assert.equal(getCardValue("A♣"), 11);
});
test("When the card is a face card (J, Q, K), the function should return 10", () => {
  assert.equal(getCardValue("J♠"), 10);
  assert.equal(getCardValue("Q♥"), 10);
  assert.equal(getCardValue("K♦"), 10);
});
test("When the card is a number card (2 to 10), the function should return its numeric value", () => {
  assert.equal(getCardValue("2♠"), 2);
  assert.equal(getCardValue("3♥"), 3);
  assert.equal(getCardValue("4♦"), 4);
  assert.equal(getCardValue("5♣"), 5);
  assert.equal(getCardValue("6♠"), 6);
  assert.equal(getCardValue("7♥"), 7);
  assert.equal(getCardValue("8♦"), 8);
  assert.equal(getCardValue("9♣"), 9);
  assert.equal(getCardValue("10♠"), 10);
});
test("Arbitrary non-card string", () => {
  assert.throws(
    () => getCardValue("invalid"),
    /Expected a number followed by a suit, but got "invalid"/,
    "Expected clear error"
  );
});
// TODO: What other invalid card cases can you think of?

test("Invalid card cases", () => {
  assert.throws(() => getCardValue("1♠"));
  assert.throws(() => getCardValue("11♠"));
  assert.throws(() => getCardValue("X♠"));
  assert.throws(() => getCardValue("A"));
  assert.throws(() => getCardValue("2"));
  assert.throws(() => getCardValue("2X"));
  assert.throws(() => getCardValue(""));
});
