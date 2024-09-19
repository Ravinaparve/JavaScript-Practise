// // Implement Caching/Memoize function
// //Memoization is a technique used to optimize functions by storing the results of expensive function calls and reusing them when the same inputs occur again.

function memoize(fn) {

    let cache = new Map(); // used to store the results of previous function calls.

    return function (...args) {
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            return cache.get(key);
        }

        const result = fn(...args);
        cache.set(key, result);
        return result;
    }
}

const slowFunction = (num) => {
    for (let i = 0; i < 1e6; i++) { }
    return num * 2;
};

const fastFunction = memoize(slowFunction);
console.log(fastFunction);

// console.log(fastFunction(10)); // Calculates and caches the result
// console.log(fastFunction(10)); // Returns the cached result
// console.log(fastFunction(20)); // Calculates and caches the result
// console.log(fastFunction(20)); // Returns the cached result



//Explanation:
//In the memoize function, another function (fn) is passed as an argument. This is the function that we want to optimize using memoization.

//memoize returns a new function that will be used instead of the original fn. This function will handle the caching.
//memoize returns a new function that wraps the original function (fn). This new function is the one that will use the arguments object to handle caching.

//Inside the memoized function, we use JSON.stringify(args) to convert the args array into a string. This string serves as a unique key for the cache.
//This key is essential for looking up cached results. If args is [10, 20], then key will be '[10,20]'.

//We check if cache contains a result for the current key. If it does, we return the cached result.


// If the result is not cached, we call the original function fn with ...args. This means that the fn function is called with the same arguments that were passed to the memoized function.

