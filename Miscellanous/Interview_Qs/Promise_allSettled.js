// How Promise.allSettled Works
// Input: You pass an array (or any iterable) of promises to Promise.allSettled.

// Output: It returns a new promise that resolves with an array of objects representing the outcome of each promise in the input array.

// Resolution: The returned promise resolves with an array of objects. Each object represents the outcome of a corresponding promise and has two possible properties:

// status: A string indicating the outcome of the promise, either "fulfilled" (if the promise resolved) or "rejected" (if the promise rejected).
// value or reason:
// If the status is "fulfilled", the object will include a value property with the resolved value.
// If the status is "rejected", the object will include a reason property with the error that caused the rejection.

//Example1:
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 50, 42));

Promise.allSettled([promise1, promise2, promise3]).then(results => console.log(results));
//[
//     { status: 'fulfilled', value: 3 },
//     { status: 'rejected', reason: 'foo' },
//     { status: 'fulfilled', value: 42 }
//   ]


//Example 2:

let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://no-such-url'
];
// Promise.allSettled(urls).then(res => console.log(res)) // this is wrong because allSettled requires array of Promises and not arr of strings
Promise.allSettled(urls.map(url => fetch(url))).then(res => console.log(res))