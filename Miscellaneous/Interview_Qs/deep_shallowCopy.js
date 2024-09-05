let obj1 = {
    name: "xyz",
    age: 12,
    company: {
        1: {
            company_name: "Microsoft",
            tenure: "1 year",
            YOJ: "2023",
        },
        2: {
            company_name: "Amazon",
            tenure: "2.5 year",
            YOJ: "2020",
        }
    }
}

// shallow copy
let obj2 = { ...obj1 };
obj2.company[1].company_name = "Google";
console.log(obj1); // changed here as well
console.log(obj2);

console.log("..............................................")
//Deep Copy:
let obj3 = JSON.parse(JSON.stringify(obj1));
obj3.company[1].company_name = "Flipkart";
console.log("obj3==>", obj3)
console.log("obj1==>", obj1); // changed here as well


const obj4 = {
    cat: "Abhishek",
    age: "12",
    address: {
        street: "nerul",
        state: "Mah",
    }
}
//shallow
let obj5 = { ...obj4 };
obj5.age = 24;
obj5.address.state = "KR"
console.log("orig=>", obj4);
console.log("copy", obj5);












