let hashmap = new Map();

hashmap.set('1',"apple")
hashmap.set('4',"zebra")
hashmap.set('5',"fan")
hashmap.set('2',"ball")

console.log(hashmap); // ordered is maintained by Map


let obj = {'1':"apple","4":"zebra","5":"fan","2":"ball"} // ordered is not maintained by regular obj
console.log(obj);