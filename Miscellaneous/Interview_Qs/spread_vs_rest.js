// Examples

// Spread in Arrays:
const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = [...arr1, ...arr2];  // Output: [1, 2, 3, 4]

// Spread in Objects:
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObj = { ...obj1, ...obj2 }; // Output: { a: 1, b: 3, c: 4 }


// Rest in Arrays:
const [first, ...rest] = [1, 2, 3, 4];
console.log(first); // Output: 1
console.log(rest);  // Output: [2, 3, 4]

//Rest in Objects:
const { a, ...rest } = { a: 1, b: 2, c: 3 };
console.log(a);    // Output: 1
console.log(rest); // Output: { b: 2, c: 3 }




//Key Differences
// Purpose:
// Spread: Expands or spreads elements of an iterable into individual elements.
// Rest: Collects multiple elements into a single array or object.


// Usage Context:
// Spread: Used in function calls, array literals, and object literals to expand elements or properties.
// Rest: Used in function parameters and destructuring assignments to collect multiple values.


// Syntax Context:
// Spread: Used in array literals ([...]) and object literals ({...}).
// Rest: Used in function parameters (...args) and array/object destructuring ([first, ...rest] and {name, ...rest}).