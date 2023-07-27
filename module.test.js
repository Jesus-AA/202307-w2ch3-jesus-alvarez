import { arrayIndexOf, arrayLength, arrayPush } from "./module.js";

const arrayTestNum = [0, 1, 5, 7, 8, 9, 10, 30, 5, 8, 9, 22, 45, 6];
const arrayTestStrings = ["Hola", "Mundo", "ISDI"];
const arrayPushFunction = [1, 2, 3, 4];

const resultArrayTestNum = 14;
const resultArrayTestStrings = 3;
const numToLookFor = 5;
const numToLookFor2 = 90;
const indexPosition = 2;
const indexPosition2 = 8;
const indexPosition3 = -1;

const pushNewLength = 5;
const pushNewLength2 = 6;

test("With the arrayTestNum the length should be 13 ", () => {
  expect(arrayLength(arrayTestNum)).toBe(resultArrayTestNum);
});

describe("When it is call the arrayLength function ", () => {
  test("With the array arrayTestNum the length should be 13", () => {
    expect(arrayLength(arrayTestNum)).toBe(resultArrayTestNum);
  });
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

test("With the arrayPush the value should be 5 ", () => {
  expect(arrayPush(arrayPushFunction, 3)).toBe(pushNewLength);
});

test("With the arrayPush the value should be 6 ", () => {
  const value1 = 3;
  const value2 = 4;
  const arrayTryOut = [1, 2, 3, 4];
  const expectedValuePushFunction = arrayPush(arrayTryOut, value1, value2);
  expect(expectedValuePushFunction).toBe(pushNewLength2);
});
