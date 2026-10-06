import assert from "node:assert";
import test from "node:test";

import { getAngleType } from "../implement/1-get-angle-type.js";

// TODO: Write tests to cover all cases, including boundary and invalid cases.
// Example: Identify Right Angles

test("Classifies for exactly 90°", () => {
  const right = getAngleType(90);
  assert.equal(right, "Right angle");
});
test("Classifies for angles greater than 0° and less than 90°", () => {
  const acute = getAngleType(89);
  assert.equal(acute, "Acute angle");
});
test("Classifies for angles greater than 90° and less than 180°", () => {
  const obtuse = getAngleType(179);
  assert.equal(obtuse, "Obtuse angle");
});
test("Classifies for exactly 180°", () => {
  const straight = getAngleType(180);
  assert.equal(straight, "Straight angle");
});
test("Classifies for angles greater than 180° and less than 360°", () => {
  const reflex = getAngleType(359);
  assert.equal(reflex, "Reflex angle");
});
test("Classifies for angles outside the valid range.", () => {
  const invalid = getAngleType(361);
  assert.equal(invalid, "Invalid angle");
});
