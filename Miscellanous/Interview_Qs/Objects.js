// Objects in javascript:
// Guess the o/p of all Qs:

//Q1: 
const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
// console.log(a);   //{ '[object Object]': 123 }
a[c] = 456;
// console.log(a);  { '[object Object]': 456 }
console.log(a[b]);  // 456 (get latest value)

//o/p : 456

//Ans : is key cant be object, it converts key to string '[object Object]' and then assign the value

let obj1 = {
    name: "John",
    age: "12"
}
// strigify is useful  and store it in localStorage
const strObj = JSON.stringify(obj1);
// localStorage.setItem("test", strObj);
// localStorage.getItem("test"); // to get the value


// Q:
const settings = {
    username: "Piyush",
    level: 19,
    health: 60,
}
const data = JSON.stringify(settings, ["level", "health"])
console.log(data); //{"level":19,"health":60}

//Q:
let person = { name: "John" }
const member = [person];
person = null;
console.log(member);  //[ { name: 'John' } ]