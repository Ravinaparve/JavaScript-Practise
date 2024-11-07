
const arr = ["A", "B", "C", "D", "E"]
console.log(Object.keys(arr));

const person = {
    firstname: "surbhi"
};

const { firstname = "Henry" } = person;
console.log(firstname)


const arr1 = [11, 0, '', false, 2, 1];
const filtered = arr1.filter(Boolean);
console.log(filtered);

const arr3 = [1, 2, 3];
const arr2 = [1, 2, 3];
const str = "1,2,3";
console.log(arr3 == str);


console.log([11, 2, 31] + [4, 5, 6]);
