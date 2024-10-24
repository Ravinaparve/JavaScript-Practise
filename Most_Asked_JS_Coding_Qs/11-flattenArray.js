let arr = [1, 2, [3, 4, [5, 6, 7]]];

let output = [];
//
function flattenArr(arr, n) {

    arr.forEach(item => {
        if (Array.isArray(item) && n > 0) {
            flattenArr(item, n - 1);
        } else {
            output.push(item);
        }
    })
}
flattenArr(arr);
console.log(output)
