const findFirstRecurringNumber = (numbers = []) => {
  const map = {};

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];

    if (map[number]) {
      return number;
    }

    map[number] = number;
  }

  return undefined;
};

console.log(findFirstRecurringNumber([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(findFirstRecurringNumber([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(findFirstRecurringNumber([2, 3, 4, 5]));
