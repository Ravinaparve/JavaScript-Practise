// //Syntax:
// includes(searchElement, fromIndex);
// // Realtime example usage
const arr = [1, 2, 3, 4, 5]
// console.log(arr.includes(3)) //true
// console.log(arr.includes(4)) //false


function ifIncludes(arr, searchElement, searchFrom = 0) {
    for (let i = searchFrom; i < arr.length; i++) {
        if (arr[i] === searchElement) {
            return true;
        }
    }
    return false;
}

console.log(ifIncludes(arr, 4, 4));
