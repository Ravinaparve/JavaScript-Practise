// "this" globally
//Example 1:
// this points to windows object globally:(when run in browser only). or when this file in run in the html documents inside browser.
this.a = 5;
console.log("this", this);


// Example 2:  "this" inside a regular unction
this.a = 12;
function getParams() {
    console.log(this);
}
getParams(); // Point to windows object 

//....................................................................................................
// Example 3 : "this" inside a arrow unction
this.a = 12;
const getParams = () => {
    console.log(this);
}
getParams(); // Point to windows object . Arrow 

/**Arrow functions do not have their own this context.
Instead, they inherit this from the surrounding lexical scope at the time they are defined.
This means that if you define an arrow function at the global level, this will refer to the global object (window in a browser).
 **/

//....................................................................................................
// Example 4 : "this" inside a regular method in object:

let user = {
    name: "Rita",
    age: 25,
    getDetails() {
        console.log(this.name);
        console.log(this); // user object
    }
}
user.getDetails(); // "Rita". "this" points to object 


//Example 5:
let userInfo = {
    firstName: "Ravina",
    lastName: "Parve",
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(userInfo.fullName()); // "Ravina Parve"

//Example 6:
const person1 = {
    name: 'Charlie',
    greet: function () {
        console.log(this); // Here, 'this' refers to the 'person' object
    }
};
person1.greet(); // Outputs: the 'person' object

//Example 7:
const person5 = {
    name: "Peter",
    getDetails: () => {
        console.log(this.name);
    }
}

//Example 8:
let userDetails = {
    firstName: "Ravina",
    lastName: "Parve",
    fullName() {
        function getAge() {
            console.log("getting Age");
            console.log(this); // window object. because get age is not called with dot notation. when function is inside a function it again points to windows object
        }
        getAge();
        console.log("this", this); // points to user object again
    }
}

console.log(userDetails.fullName());

//Example 9:
// When you have a regular function inside a method(such as a callback function in setTimeout), the value of this is not automatically bound to the object that contains the method.
// Instead, this inside the callback function refers to the global object(or undefined in strict mode).
let userCredentials = {
    firstName: "Ravina",
    lastName: "Parve",
    tags: ['a', 'b', 'c'],
    printTags() {
        console.log(this.tags); //[ 'a', 'b', 'c' ]
        this.tags.forEach(function (tag) {
            // console.log(tag);
            console.log("this", this); // points to windows object. because user is not calling the function with dot notation. foreach is calling that function. so it is not bound to the object. To make it bound to the object use arrow function

        })
    }
}

console.log(userCredentials.printTags());


//Example 10:
let personInfo = {
    firstName: "Ravina",
    lastName: "Parve",
    tags: ['a', 'b', 'c'],
    printTags() {
        console.log(this.tags); //[ 'a', 'b', 'c' ]
        this.tags.forEach((tag) => {
            // console.log(tag);
            console.log("this", this); // points to the user object since arrow function is used

        })
    }
}
console.log(personInfo.printTags());



//Example 11: 
const person2 = {
    name: 'Charlie',
    greet: function () {
        setTimeout(function () {
            console.log(this); // Here, 'this' refers to the global object or 'undefined' in strict mode
        }, 1000);
    }
};
person2.greet();


//eg2:
let user1 = {
    name: "Rita",
    age: 25,
    childObj: {
        newName: "Sunita",
        getDetails() {
            console.log(this.name, "and", this.newName);
            console.log(this);
        }
    }
}







// Fixing the Issue
// To ensure that this inside the callback function refers to person, you can use an arrow function, which captures this from its surrounding lexical context:



// The arrow function (below) inside setTimeout captures this from the surrounding lexical context of the greet method. In this case, the lexical context of the arrow function is the greet method, which means this refers to person3. Therefore, this.name outputs 'Charlie'. 

// In the person3.greet example, the arrow function inside setTimeout captures this from the greet method, which is person3
const person3 = {
    name: 'Charlie',
    greet: function () {
        setTimeout(() => {
            console.log(this.name); // 'this' refers to 'person' because the arrow function captures 'this'
        }, 1000);
    }
};
person3.greet(); // Outputs: Charlie



//.....................................................................................................


const obj = {
    i: 10,
    b: () => console.log(this.i),
    c() {
        console.log(this.i);
    }
};

obj.b(); // Outputs: undefined (or throws an error in strict mode)
obj.c(); // Outputs: 10

//here,
// (b): Arrow functions do not have their own this. They inherit this from the surrounding lexical context at the time they are defined. In the case of obj.b, the surrounding context is the global scope or module scope (not obj). Therefore, this in the arrow function does not refer to obj. Instead, it refers to the global object (or undefined in strict mode), so this.i is undefined (or throws an error in strict mode).

//In the obj example, the arrow function b is defined in the global context or module scope, not within a method or function. Hence, this refers to the global object or undefined in strict mode, not obj.


// This inside constructor fucntion:
function Hi() {
    console.log(this);
}
new Hi(); // Hi {} when function is called with new keyword. it create an empty object and this points ti that object

// Tricky Questions:
var length = 4;
function callback() {
    console.log(this.length);
}

const object1 = {
    length: 5,
    method(fn) {
        fn(); //4
    }
}

const object2 = {
    length: 5,
    method() { // arguments [callback,2,3]
        console.log(arguments);
        arguments[0](); // what's logged ??  Ans: 3
    }
}
object.method(callback, 2, 3)