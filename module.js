export const arrayLength = (array) => {
  let counter = 0;
  for (const item of array) {
    counter++;
  }

  return counter;
};

export const arrayIndexOf = (value, array) => {
  let counter = -1;
  for (const item of array) {
    counter++;
    if (item === value) {
      return counter;
    }
  }

  return -1;
};

const dog = "Jessy";
const testArray = ["Kubo", "Maca", "Wish", "Jessy"];
console.log(testArray.indexOf("Jessy"));
console.log(arrayIndexOf("Jessy", testArray));
