let animal = {
    eats: true,
    walk() {
        console.log("Animal Walks");
    }
}

let rabbit = {
    jumps: true,
    __proto__: animal, //sets animal to be the prototype of rabbit. means rabbit can inherit properties of animal
}

let longEar = {
    earLength: 10,
    __proto__: rabbit ////sets rabbit to be the prototype of longEar. means longEar can inherit properties of rabbit
};

// rabbit.__proto__ = animal;
console.log(rabbit.eats); // true
console.log(rabbit.walk()); // Animal Walks
console.log(longEar.walk()); // Animal Walks
console.log(longEar.eats); // true

//..........prototype used along with constructor

function Person(name, city) {
    this.name = name;
    this.city = city;
}

Person.prototype.getFullDetails = function () {
    return this.name + " " + this.city;
}

let p1 = new Person("ABC", "uk"); //Person { name: 'ABC', city: 'uk' }
console.log(p1);
console.log(p1.getFullDetails());