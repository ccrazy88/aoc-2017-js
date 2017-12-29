import {
  calculateSteps,
  calculateFirstSquareGreaterThanValue
} from "../src/day-03";

test("solves 1 by returning 0", () => {
  expect(calculateSteps(1)).toBe(0);
});

test("solves 12 by returning 3", () => {
  expect(calculateSteps(12)).toBe(3);
});

test("solves 23 by returning 2", () => {
  expect(calculateSteps(23)).toBe(2);
});

test("solves 1024 by returning 31", () => {
  expect(calculateSteps(1024)).toBe(31);
});

test("solves the first half of the puzzle", () => {
  expect(calculateSteps(277678)).toBe(475);
});

test("solves the second half of the puzzle", () => {
  expect(calculateFirstSquareGreaterThanValue(277678)).toBe(279138);
});
