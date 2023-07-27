export const arrayLength = (array) => {
  let counter = 0;
  for (const item of array) {
    counter++;
  }

  return counter;
};

export const arrayIndexOf = (value, array, index) => {
  let counter = -1;

  if (index) {
    counter = index;
    const maxLength = arrayLength(array);

    for (let i = index; i < maxLength; i++) {
      if (array[i] === value) {
        return counter;
      }

      counter += 1;
    }

    return -1;
  }

  for (const item of array) {
    counter++;
    if (item === value) {
      return counter;
    }
  }

  return -1;
};

export const arrayPush = (array, ...value) => {
  const arrayOfElements = value;

  for (const item of arrayOfElements) {
    const arrayLengthNum = arrayLength(array);
    array[arrayLengthNum] = item;
  }

  const newLength = arrayLength(array);
  return newLength;
};
