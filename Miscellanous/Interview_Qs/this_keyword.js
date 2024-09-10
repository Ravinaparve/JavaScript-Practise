
//Understanding this in Different Contexts
//1.  Method Context:

// When you call a function as a method of an object, this refers to the object that owns the method.This is because the method is invoked as a property of the object.javascript

const person1 = {
    name: 'Charlie',
    greet: function () {
        console.log(this); // Here, 'this' refers to the 'person' object
    }
};
person.greet(); // Outputs: the 'person' object


// Why ?: 
// The function is called as person.greet().In this context, this is set to the person object because it is the object on which the method was invoked.


//2. Regular Function Inside a Method:

// When you have a regular function inside a method(such as a callback function in setTimeout), the value of this is not automatically bound to the object that contains the method.Instead, this inside the callback function refers to the global object(or undefined in strict mode).
const person2 = {
    name: 'Charlie',
    greet: function () {
        setTimeout(function () {
            console.log(this); // Here, 'this' refers to the global object or 'undefined' in strict mode
        }, 1000);
    }
};
person.greet();
// Why ?:
// The function inside setTimeout is a regular function. When setTimeout executes the function, it is not invoked as a method of person, so this does not refer to person.It refers to the global object instead.




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
person.greet(); // Outputs: Charlie



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