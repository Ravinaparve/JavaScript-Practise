function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), ms);
    });
}

let promise = delay(3000);
console.log(promise);
promise.then(() => console.log("runs after 3 seconds"))
