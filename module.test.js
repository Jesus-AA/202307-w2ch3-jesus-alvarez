import { arrayIndexOf, arrayLength } from "./module.js";

const arrayTestNum = [0, 1, 5, 7, 8, 9, 10, 30];
const arrayTestStrings = ["Hola", "Mundo", "ISDI"];

const resultArrayTestNum = 8;
const resultArrayTestStrings = 3;

test("With the arrayTestNum the length should be 8 ", () => {
  expect(arrayLength(arrayTestNum)).toBe(resultArrayTestNum);
});

test("With the arrayTestStrings the length should be 3 ", () => {
  expect(arrayLength(arrayTestStrings)).toBe(resultArrayTestStrings);
});

const resultArrayIndexOf = 4;

test("With the arrayIndexOf the index should be 4 ", () => {
  expect(arrayIndexOf(8, arrayTestNum)).toBe(resultArrayIndexOf);
});
