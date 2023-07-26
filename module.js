export const arrayLength = (array) => {
  let counter = 0;
  for (const item of array) {
    counter++;
  }

  return counter;
};

const array1 = ["Kubo", "Jessy", "Maca"];
console.log(arrayLength(array1));
console.log("The array length is: ", array1.length);
