let obj = { name: "xyz", age: 12 };

let clone = Object.create(obj);

//When you use Object.create() to create a new object, the new object (clone in your case) will inherit properties from the prototype object (obj), but it will not directly copy those properties. 
// This means that clone will have access to obj's properties through the prototype chain, but clone itself will not have those properties as its own properties.
console.log(clone); //{}

//The clone object is indeed an empty object. However, it has obj as its prototype, so you can access obj's properties through clone:
console.log(clone.name); // xyz
console.log(clone.age);  // 12

//Verifying the Prototype
// To confirm that clone has obj as its prototype, you can use Object.getPrototypeOf():

console.log(Object.getPrototypeOf(clone) === obj); // Output: true


//..........................................................................................................
// Object.create() in arrays:
let baseArray = [1, 2, 3];

let newArray = Object.create(baseArray);

console.log(newArray); // Output: [] (empty array)

console.log(newArray.length); // Output: 0 (length of the newArray itself)

console.log(newArray[0]); // Output: undefined (no own properties on newArray)

console.log(newArray[1]); // Output: undefined (no own properties on newArray)
