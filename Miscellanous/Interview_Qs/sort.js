// sorting rule:
// -1 = dont change the positions


// Sort in ascending
animals.sort(function (a, b) {
    if (a > b) {
        return 1; //1 means we need to swap b with a 
    }
    if (b > a) {
        return -1; //-1 means dont change anything. a and b will remain in same postions
    }
    return 0; // means no change.. but dont use it since it has inconsistent behaviour
});


// Sort in Descending
animals.sort(function (a, b) {
    if (a > b) {
        return -1; //-1 means dont change anything. in desc a wil be greater than b
    }
    if (b > a) {
        return 1; // //1 means we need to swap b with a . 
    }
    return 0; // means no change.. but dont use it since it has inconsistent behaviour
});


// // can also be written as:
// animals.sort((a, b) => a > b ? -1 : 1);

const items = [
    { name: "edward", value: 21 },
    { name: "Sharpe", value: 36 },
    { name: "and", value: 56 },
    { name: "magnetic", value: 17 },
    { name: "zeros", value: 20 },
]

function customSort(arr, attribute) {
    if (attribute == "name") {
        arr.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
    } else {
        arr.sort((a, b) => a.value - b.value);
    }
    return arr;
}
let res = customSort(items, "name");
console.log(res);


//....................................................
// sort fn logic
function func(a, b, num) {
    if (num == 1) return swapped
    else if (num == -1) return a, b;
    return null;
}
// 0 dont have consistent behavior