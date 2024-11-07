//..................................EXAMPLES.......................................
//EX 1:
const person = { name: "John" }

function greet() {
  return `Hello ${this.name}`
}

console.log(greet.call()); // undefined
console.log(greet.apply(person)); // Hello John
const greet2 = greet.bind(person); // returns a function
console.log(greet2()); //Hello John // calling the returned function from bind



//EXAMPLE 2: ........................................................................

const vehicle = {
  name: "Tesla",
  type: "EV",
  start: function () { return `starting the ${this.name} ${this.type}` },
  stop: function () { return `stopping the ${this.name} ${this.type}` }
}

const car = { name: "toyota", type: "car" }

console.log(vehicle.start.call(car));
console.log(vehicle.stop.apply(car));


//EXAMPLE 3: ........................................................................

function a() {
  console.log("Hii :::");
}
a.call(); // Hii :::


//EXAMPLE 4: ........................................................................
//"wizard" obj has heal mthd

const wizard = {
  name: 'Merlin',
  health: 100,
  heal(num1, num2) {
    return (this.health += num1 + num2);
  },
};
console.log(wizard.heal()); // NaN

// "archer" object needs the "heal" method
const archer = {
  name: 'Robin Hood',
  health: 30,
};

console.log(wizard.heal.apply(archer, [20, 30]));  //80

//EXAMPLE 5: ......................................................................................
// call and apply (null or undefined)
let details = { firstname: "Ravina" };

let printFullName = function (hometown, state) {
  console.log(`${this.firstname}, ${hometown} ,${state}`);
}
console.log(printFullName.apply(details, ["nerul", "maharashtra"])); //Ravina, nerul ,maharashtra

console.log(printFullName.call(null, "nerul", "maharashtra")); // "undefined, nerul, maharashtra"

// When null or undefined is passed as the this context, JavaScript uses the global object (window in browsers) or undefined in strict mode. 

// Since null does not have a firstname property, this.firstname will be undefined.
// for call context( ie this ) is not provided



//EXAMPLE 6: ......................................................................................
// Bind example:
var obj = { name: "Ryan" };

function sayHello(age, profession) {
  return `Hello ${this.name} is ${age} and is an ${profession}`;
}

const bindFunc = sayHello.bind(obj);
console.log(bindFunc); //[Function: bound sayHello]
console.log(bindFunc(23, "Software engineer")); // Hello Ryan is 23 and is an Software engineer



//..........output based questions.................................................
// Refer: https://roadsidecoder.hashnode.dev/javascript-interview-questions-call-bind-and-apply-polyfills-output-based-explicit-binding


// Q1 -What's the output:
var personInfo = { name: "Ryan" };

function sayHi(age) {
  return `Hello ${this.name} is ${age}`;
}

console.log(sayHi.call(personInfo, 24)); // ?? Ans : Hello Ryan is 24
console.log(sayHi.bind(personInfo, 24)); // ?? Ans: [Function: bound sayHi]

const binderFunc = sayHi.bind(personInfo, 24);
console.log(binderFunc()); // Hello Ryan is 24
//......................................................................................................

//Q2> What's the output:

var status = '😎';

setTimeout(() => {
  const status = '😍';

  const data = {
    status: '🥑',
    getStatus() {
      return this.status;
    },
  };

  console.log(data.getStatus()); // output??
  console.log(data.getStatus.call(this));  // output??
}, 0);

//......................................................................................................

//Q3) how will you use the printAnimals() function on animals ?

const animals = [
  { species: 'Lion', name: 'King' },
  { species: 'Whale', name: 'Queen' }
];

function printAnimals(i) {
  this.print = function () {
    console.log('#' + i + ' ' + this.species
      + ': ' + this.name);
  }
  this.print();
}

// Ans:
for (let i = 0; i < animals.length; i++) {
  printAnimals.call(animals[i], i);
}


//......................................................................................................

//Q4> /How to push all items from an array to another array
const array = ['a', 'b'];
const elements = [0, 1, 2];

array.push(elements); // this wont work, because it will push the whole array inside of it. ['a', 'b',[0, 1, 2]]

//Ans:
array.push.apply(array, elements);
// apply first parameter specifies the context, ie it will work on "array". the second parameter takes an array and append values one by one in "array"
console.log(array); //[ 'a', 'b', 0, 1, 2 ]


//......................................................................................................

//Q5> Find min/max in an array and use apply to enhance a built-in function.
const numbers = [5, 6, 2, 3, 7];

console.log(Math.max.apply(null, numbers)); //7
console.log(Math.min.apply(null, numbers)); //6

// explanation:
// here we are providing the context as null, because we are not operating on any another array, it just one array which will be passed as 2nd arg from which max and min will be found


//......................................................................................................

//Q6> What's the output . (Bound function)

function f() {
  console.log(this);
}

let user = {
  g: f.bind(null),
};

user.g();

//......................................................................................................

//Q7> Bind Chaining. (Bound function)
function f() {
  console.log(this.name);
}

f = f.bind({ name: "John" }).bind({ name: "Ann" });

f(); // What's the output

// bind chaining doesnt exists.
// once's th function is bound to one object. It will always be bounded to that object itself


//......................................................................................................

//Q7> Partial Application for login function
function checkPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "1234") ok();
  else fail();
}
let userInfo = {
  name: "Angela",

  login(result) { // true or false is passed as a result
    console.log(this.name + (result ? "login successful" : "login failed"));
  }
}

// checkPassword(?,?) (what values will be passed)
checkPassword(userInfo.login(true), userInfo.login(false)); // this will immediately return value and log it . but we need to return the function as callback to checkpassword. so this can be modified as:

checkPassword(userInfo.login.bind(userInfo, true), userInfo.login.bind(userInfo, false))



//Q7> Explicit binding with arrow functions:
const age = 10;
var person1 = {
  name: "Peter",
  age: 20,
  getAgeArrow: () => console.log(this.age),
  getAge: function () {
    console.log(this.age);
  }
}

var person2 = { age: 24 };
person1.getAge.call(person2); //24
person2.getAgeArrow.call(person2); // ?? (ans: undefined)
// arrow fn dont have "this", so they take context from their parent normal function .
//since person1 is defined in global scope so it will point to global variable age  = 10
// it doesnt matter how arrow function is called with (either will call, apply or bind) . it will always behave same everywhere.
// we cant manipulate the context of arrow function will call apply and bind 