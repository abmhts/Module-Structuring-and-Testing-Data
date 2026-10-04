import { formatAs12HourClock } from "./timeConverter.js";
import assert from "node:assert";
import test from "node:test";

test("correctly convert time after 12:00", function () {
  assert.equal(formatAs12HourClock("23:00"), "11:00 pm");
});

test("can correctly convert morning time", function () {
  assert.equal(formatAs12HourClock("08:00"), "08:00 am");
});

test("can correctly convert midnight", function () {
  assert.equal(formatAs12HourClock("00:00"), "12:00 am");
});

test("can correctly convert minutes after midnight", function () {
  assert.equal(formatAs12HourClock("00:30"), "12:30 am");
});

test("can correctly convert last minute of the midnight hour", function () {
  assert.equal(formatAs12HourClock("00:59"), "12:59 am");
});

test("can correctly convert first hour after midnight", function () {
  assert.equal(formatAs12HourClock("01:00"), "01:00 am");
});

test("can correctly convert morning time with minutes", function () {
  assert.equal(formatAs12HourClock("09:45"), "09:45 am");
});

test("can correctly convert last minute before noon", function () {
  assert.equal(formatAs12HourClock("11:59"), "11:59 am");
});

test("can correctly convert noon", function () {
  assert.equal(formatAs12HourClock("12:00"), "12:00 pm");
});

test("can correctly convert minutes after noon", function () {
  assert.equal(formatAs12HourClock("12:30"), "12:30 pm");
});

test("can correctly convert last minute of the noon hour", function () {
  assert.equal(formatAs12HourClock("12:59"), "12:59 pm");
});

test("can correctly convert first hour after noon", function () {
  assert.equal(formatAs12HourClock("13:00"), "01:00 pm");
});

test("keeps minutes in the afternoon", function () {
  assert.equal(formatAs12HourClock("13:30"), "01:30 pm");
});

test("keeps leading zero in minutes in the evening", function () {
  assert.equal(formatAs12HourClock("18:05"), "06:05 pm");
});

test("can correctly convert last minute of the day", function () {
  assert.equal(formatAs12HourClock("23:59"), "11:59 pm");
});
