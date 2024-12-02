//https://www.youtube.com/watch?v=amCWD7bKkw0&list=PLfEr2kn3s-bo4LwlbyZugHPavhcdW8YMC&index=91
//example:
function displayData(age, location) {
    this.age = age
    this.location = location
}
console.log(displayData(42, "Pune")); // when you call the function without "new", the "this" will point to window object. in the window object age and location property will get created with the values

// when you add "new" keyword before any regular function it returns an object instead of returning the return values from that function
//eg1
function sayHi() {
    return "Hii";
}

console.log(new sayHi());  // sayHi {}

//.............................................................................................................................
//eg2:
function CreateUser(firstName) {
    this.firstName = firstName; // "this" will point to the object that is created when this function is called with "new" keyword
}

console.log(new CreateUser); //createUser { firstName: undefined } 

//.............................................................................................................................

//eg3:
function CreateDetails(firstName, age) {
    this.firstName = firstName
    this.age = age
}

const user1 = new CreateDetails("Tina", 32); // this will create user1 object { firstName: 'Tina', age: 32 }


CreateDetails.prototype.getUser = function () {
    return this.firstName;
}
console.log(CreateDetails.prototype); // { getUser: [Function(anonymous)] }

console.log(user1); // createDetails { firstName: 'Tina', age: 32 }. inside the prototype of user1 is the getuser function

console.log(user1.getUser()); // Tina



//.............................................................................................................................


//Video Notes:
// when you call a regular function with "new" keyword it returns a object.
// and "this" keyword if provided in that regular function , will point to the object that's created using "new" keyword
// when you call the function without "new", the "this" will point to window object.

//Every function (suppose fnA) has a prototype property.
// inside the prototype, there's a constructor property which points to the same function (fnA).
// we can create our own functions (methods) inside this prototype property
// any objects that we create using the function fnA will also have the  created methods. which we can access using dot notation
// so this way we have created inheritance

// but every time we need to create method we ned to create it as => fnA.protoype.mtd1 = function(){}
// so this will create lot of code. to solve this we have "Classes" in javascript. so writing the methods in more cleaner way
