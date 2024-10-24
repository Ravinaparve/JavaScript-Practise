console.log("1");
setTimeout(() => console.log("Hello"), 0);
setImmediate(() => console.log("Hii"))
Process.nextTick("Hello");
console.log("2");

// Fetch vs axios
// there's a issue with fetch, fetch returns promise, if you do Promise.all on fetch result you will get returns all promises wvwn when rejected.. so better use axios



