//promise.all....................................................................
let promise1 = Promise.resolve(3);
let promise2 = new Promise((resolve) => setTimeout(resolve("foo"), 100));
let promise3 = 42;

Promise.all([promise1, promise2, promise3]).then((results) => console.log(results));



// fetch Data:
let names = ['iliakan', 'remy', 'jeresig'];
let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));
console.log(requests);

Promise.all(requests).then(response => console.log(response)); // this returns an array containing objects of github user details

Promise.all(requests).then(response => {
    for (let resp of response) {
        console.log(resp.url);
    }
})

//o/p:
//https://api.github.com/users/iliakan
// https://api.github.com/users/remy
// https://api.github.com/users/jeresig
