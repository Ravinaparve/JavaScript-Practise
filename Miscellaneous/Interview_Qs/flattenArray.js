
// let result = arr.flat(3);
// console.log(result);

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

arr = [[1, 2], [3, [4, 5, [9, 10]]], [6, 7]];

console.log(flattenArray(arr, 2));


