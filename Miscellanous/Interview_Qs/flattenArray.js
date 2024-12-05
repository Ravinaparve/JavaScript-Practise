// using built-in
let result = arr.flat(3);
console.log(result);




//....................................................................................................
// case 1: flattening arr at particular given depth(n)


var flattenArray = (arr, n) => {
    if (n == 0) return arr;
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == "number") {
            res.push(arr[i]);
        } else {
            res.push(...flattenArray(arr[i], n - 1));
        }
    }
    return res;
}


console.log(flattenArray(arr, 2));




//.................................................................................................
// case 2: flattening arr at particular given depth(n)

let res = [];

function flattenArr(arr, n) {
    for (let elem of arr) {
        if (Array.isArray(elem) && n > 0) {
            flattenArr(elem, n - 1);
        } else {
            res.push(elem);
        }
    }
}
let arr = [[1, 2], [3, [4, 5, [9, 10]]], [6, 7]];
flattenArr(arr, 3);
console.log(res);




//.................................................................................................
// case 3: without passing depth.flattening entire arr
let output = [];
function customFlat(arr) {
    arr.forEach(item => {
        if (Array.isArray(item)) {
            customFlat(item);
        } else {
            output.push(item);
        }
    });
}
// let arr = [1, [2, [3], 4, [5, 6, [7]]]]
let arr1 = [[1, 2], [3, [4, 5, [9, 10]]], [6, 7]];
// let arr = [[1, 2], [3, [4, 5, [9, 10]]], [6, 7]];
customFlat(arr1);
console.log(output);



//.....................return from within the fn
function flatten(value) {
    let flattenedArr = [];

    for (let i = 0; i < value.length; i++) {
        if (Array.isArray(value[i])) {
            flattenedArr.push(...flatten(value[i]));
            // flatten(value[i]);
        } else {
            flattenedArr.push(value[i]);
        }
    }

    return flattenedArr;
}

let arr2 = [
    [1, 2],
    [3, 4],
]
console.log(flatten(arr2)) // [ 1, 2, 3, 4 ]
