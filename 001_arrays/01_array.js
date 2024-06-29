const strings = ["1", "2", "3", "4"];

// push
strings.push("5"); // O(1)

// pop
strings.pop(); // O(1)

// unshift
strings.unshift("x"); // O(n)

// splice
strings.splice(2, 0, "alien");

console.log(strings);

// Lookup - O(1)
// Push - O(1)
// Insert - O(n)
// Delete - O(n)
