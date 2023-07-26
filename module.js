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
