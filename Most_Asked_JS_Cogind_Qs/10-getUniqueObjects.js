//Write logic to get unique objects from below array ?
//  I/P: [{name: "sai"},{name:"Nang"},{name: "sai"},{name:"Nang"},{name: "111111"}];
//  O/P: [{name: "sai"},{name:"Nang"}{name: "111111"}

let arr = [{ name: "sai" }, { name: "Nang" }, { name: "sai" }, { name: "Nang" }, { name: "111111" }];

let result = [];

let obj = {};
arr.forEach((item) => {

    if (!obj[item.name]) {
        obj[item.name] = true;
        result.push(item);
    }

})
console.log(result);