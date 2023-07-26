import { arrayIndexOf, arrayLength } from "./module.js";

const arrayTestNum = [0, 1, 5, 7, 8, 9, 10, 30, 5, 8, 9, 22, 45, 6];
const arrayTestStrings = ["Hola", "Mundo", "ISDI"];

const resultArrayTestNum = 14;
const resultArrayTestStrings = 3;
const numToLookFor = 5;
const numToLookFor2 = 90;
const indexPosition = 2;
const indexPosition2 = 8;
const indexPosition3 = -1;

test("With the arrayTestNum the length should be 13 ", () => {
  expect(arrayLength(arrayTestNum)).toBe(resultArrayTestNum);
});

test("With the arrayTestStrings the length should be 3 ", () => {
  expect(arrayLength(arrayTestStrings)).toBe(resultArrayTestStrings);
});

test("With the arrayIndexOf the value should be 2 ", () => {
  expect(arrayIndexOf(numToLookFor, arrayTestNum)).toBe(indexPosition);
});

test("With the arrayIndexOf the value should be 8 ", () => {
  expect(arrayIndexOf(numToLookFor, arrayTestNum, 3)).toBe(indexPosition2);
});

test("With the arrayIndexOf the value should be -1 ", () => {
  expect(arrayIndexOf(numToLookFor2, arrayTestNum, 3)).toBe(indexPosition3);
});
