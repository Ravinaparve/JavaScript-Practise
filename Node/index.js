console.log("1");
setTimeout(() => console.log("Hello"), 0);
setImmediate(() => console.log("Hii"))
Process.nextTick("Hello");
console.log("2");

// Fetch vs axios
// there's a issue with fetch, fetch returns promise, if you do Promise.all on fetch result you will get returns all promises wvwn when rejected.. so better use axios

function fetchData(url) {
    return fetch(url)
        .then((res) => res.json())
        .catch((err) => err);
}

const allPromisesArr = [
    fetchData("https://dummyjson.com/products/1"),
    fetchData("https://dummyjson.com/products/2"),
    fetchData("https://dummyjson.com/products/3"),
    fetchData("https://dummyjson.com/products/4"),
    fetchData("https://dummyjson.com/products/5"),
];

Promise.allSettled(allPromisesArr)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));


console.log(calc.add(10).mul(5).sub(10).div(4))