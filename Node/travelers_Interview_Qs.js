// travelers interview Qs:
//Q1>,,.......................
console.log(1)
fs.read(() => console.log('resolved'))
process.nextTick(() => console.log(2))
setTimeout(() => console.log(3), 0)
console.log(4)

//Q2...........................
function Test1Promise() {
  return 'Hello'
}
function Test2Promise() {
  return Promise.resolve('Hello');
}
console.log(Test1Promise());
console.log(Test2Promise())


// Q3.................
const promise1 = Promise.resolve("One"); const promise2 = new Promise((resolve) => setTimeout(() => resolve("Two"), 1000));
const promise3 = Promise.reject("Three");
const results = Promise.allSettled([promise1, promise2, promise3])
console.log(results);

// Q$: MongoDB interview QS
//restaurants with a grade of 2 or 6 that are located in Mumbai and whose cuisine isn't veg

//
// what is API gateway
// how to mock api in unit testing
// security measures in node application
// diff npm i and npm ci
// what is bundle
// structure of node js application
// performance optimization technics

