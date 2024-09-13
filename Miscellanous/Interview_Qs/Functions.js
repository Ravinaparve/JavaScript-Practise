//Use the arguments Object
function fn() {
    console.log(arguments);
}
fn(1, 2, 3, 4); //[Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }


const fn1 = () => console.log(arguments); // error: arrow functions dont have arguments, this and they cant be called with new keyword
fn1(1, 2, 3, 4);
