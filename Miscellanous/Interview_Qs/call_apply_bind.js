
const person = { name: "John" }

function greet() {
  return `Hello ${this.name}`
}

console.log(greet.call()); // undefined
console.log(greet.apply(person)); // Hello John
const greet2 = greet.bind(person);
console.log(greet2()); //Hello John



// .....................................................................................

const vehicle = {
  name: "Tesla",
  type: "EV",
  start: function () { return `starting the ${this.name} ${this.type}` },
  stop: function () { return `stopping the ${this.name} ${this.type}` }
}

const car = { name: "toyota", type: "car" }

console.log(vehicle.start.call(car));
console.log(vehicle.stop.apply(car));




function a() {
  console.log("Hii :::");
}
a.call(); // Hii :::


//...........................................................................................
//obj 1 has heal mthd
const wizard = {
  name: 'Merlin',
  health: 100,
  heal(num1, num2) {
    return (this.health += num1 + num2);
  },
};
console.log(wizard.heal()); // NaN

// object 2 needs the heal method
const archer = {
  name: 'Robin Hood',
  health: 30,
};

console.log(wizard.heal.apply(archer, [20, 30]));  //80

//..................................................................................................

let details = { firstname: "Ravina" };
let printFullName = function (hometown, state) {
  console.log(`${this.firstname}, ${hometown} ,${state}`);
}
==> console.log(printFullName.call(null, "nerul", "maharashtra")); // "undefined, nerul, maharashtra"
// When null or undefined is passed as the this context, JavaScript uses the global object (window in browsers) or undefined in strict mode. 
// Since null does not have a firstname property, this.firstname will be undefined.

==> console.log(printFullName.apply(details, ["nerul", "maharashtra"]));
