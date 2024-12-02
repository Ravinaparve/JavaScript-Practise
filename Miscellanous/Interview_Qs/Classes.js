// behind the scene they are just constructor functions
// classes are just the syntaxical sugar (way of writing)
// dont add () after class name when defining the class
// classes can only be called using "new" keyword
// classes are just functions behind the scene => typeof(className)  => function
// inside the body of the class, if we define "methods" , it will automatically get added to the protoype of that class.
// this is the only feature of class
// so we dont have to do fnA.protoype.mtd1 = function(){} everytime, to add method to a obj of that fnA


class CreateUser {
    getFullName() {
        return this.firstName + " " + this.lastName
    }
    sayHello() {
        return "Hello! " + this.firstName
    }
}