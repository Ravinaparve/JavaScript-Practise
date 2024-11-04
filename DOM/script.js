// // resolve a promise when a button is clicked!
const myPromise = new Promise((res, rej) => {
    // here if resolved part is executed  first rej() wont run..ie  reject btn wont return "rejected"
    document.getElementById("btn1").addEventListener("click", () => {
        res("resolved")
    });
    document.getElementById("btn2").addEventListener("click", () => {
        rej("rejected");
    });
})

// below line will run only when promise is resolved/ rejected
myPromise.then(res => console.log(res)).catch((err) => console.log(err))


// Q2: Create a promise without using new keyword and set it to pending state
async function myFn() {
    let res = await myPromise; // this will set the promise in pending until any button (rejected/resolved) is clicked 
    // throw new Error; // creates rejected promise
    return "John"

};
let ans = await myFn(); // await works outside of async only when type ="module " in scripts
console.log("ans", ans); // will retun a promise
//Async functions always return a promise. If the return value of an async function is not explicitly a promise, it will be implicitly wrapped in a promise.


// await keyword can only be used with promise because The await operator is used to wait for a Promise and get its fulfillment value.



