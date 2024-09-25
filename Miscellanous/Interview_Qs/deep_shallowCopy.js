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

// SHALLOW COPY
//this is a shallow copy, meaning that the top-level properties are copied by value, but nested objects (like company) are copied by reference.
let obj2 = { ...obj1 };
obj2.company[1].company_name = "Google";
console.log(obj1); // changed here as well
console.log(obj2);

//obj2.company[1].company_name = "Google"; modifies the company_name property of company[1] in obj2.
//Since company is a nested object and only a reference to it is copied, both obj1 and obj2 still point to the same company object. 
//Therefore, this modification affects both obj1 and obj2.


// .................................................................................................................................................


// DEEP COPY .............

let obj3 = JSON.parse(JSON.stringify(obj1));
obj3.company[1].company_name = "Flipkart";

console.log("obj3==>", obj3) //meaning that changes to one obj will not affect other obj

console.log("obj1==>", obj1); // obj3 reflects the change to "Flipkart", while obj1 remains unchanged with "Microsoft"

// .................................................................................................................................................

// Examples:
const obj4 = {
    cat: "Abhi",
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












