import { arrayLength } from "./module.js";

const arrayTest = [0, 1, 5, 7, 8, 9, 10, 30];

const resultArrayLength = 8;

test("With the arrayTest the length should be 8", () => {
  expect(arrayLength(arrayTest)).toBe(resultArrayLength);
});
