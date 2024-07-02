const reverse = (str) => {
  let rev = "";

  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }

  return rev;
};

const mergeSortedArrays = (array1 = [], array2 = []) => {
  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }

  const mergedArray = [];

  let i = 0;
  let j = 0;

  let array1Item = array1[i];
  let array2Item = array2[j];

  while (array1Item !== undefined || array2Item !== undefined) {
    if (array2Item === undefined || array1Item < array2Item) {
      mergedArray.push(array1Item);
      i++;
      array1Item = array1[i];
    } else {
      mergedArray.push(array2Item);
      j++;
      array2Item = array2[j];
    }
  }

  return mergedArray;
};
