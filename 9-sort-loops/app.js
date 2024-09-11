const sortArray = (arr, asc = true) => {
  const sortedArray = [...arr];

  for (let i = 0; i < sortedArray.length; i++) {
    for (let j = i; j < sortedArray.length; j++) {
      if (asc ? sortedArray[i] > sortedArray[j] : sortedArray[i] < sortedArray[j]) {
        const tmpValue = sortedArray[i];
        sortedArray[i] = sortedArray[j];
        sortedArray[j] = tmpValue;
      }
    }
  }

  return sortedArray;
};

console.log(sortArray([9, 4, -2, 6, 10, 3]));
console.log(sortArray([9, 4, -2, 6, 10, 3], false));
