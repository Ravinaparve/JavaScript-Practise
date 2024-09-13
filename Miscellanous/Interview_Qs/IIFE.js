(function () {
    console.log("This is IIFE");
})(); //This is IIFE

(function (name) {
    console.log("Hello!," + name + "!");
})("ravina"); //Hello!,ravina!




(function (x) {
    return (function (y) {
        console.log(x);
    })(2)
})(1)
// o/p: 1 : since it will check in the inner function if it doesnt find x there it will search in parent outer fn (closures)