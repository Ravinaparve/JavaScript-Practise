let obj = {
    name: "Ravina",
}

obj.mynewMap = function () {
    console.log(this.name); // this points to the object/arr on which this method will be called
}
console.log(obj);

// console.log(obj.map());
// console.log(obj.mynewMap());