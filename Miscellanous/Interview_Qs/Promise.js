// Good Blog: https://www.iodigital.com/en/history/isaac/promises-and-async-await


// order of execution:
//Promises execute before setTimeout



// Basic Promise Syntax:
const myPromise = new Promise((resolve, reject) => {
    doAsynchronousThings(() => {
        if (allIsGood) {
            resolve('my data')
        } else {
            reject(new Error('things failed'))
        }
    })
})

//..................................................................................................
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), ms);
    });
}

let promise = delay(3000);
console.log(promise);
promise.then(() => console.log("runs after 3 seconds"))
