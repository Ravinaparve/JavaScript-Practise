//Example 1:
// below fn will log 1 and call it self first. again it will log 1 and call it self. 
// this will continue forever resulting in stack overflow. because there is no stopper or a base condition specifying when to stop
function f1() {
    console.log(1);
    f1();
}
f1(); //output : 1 1 1 1 1 1 1 1....................................


// Example 2:
// below code will log count value , increment it and log call itself again. there's no base cond here as well.
let count = 0;
function f1() {
    console.log(count);
    count++;
    f1();
}
f1(); //output : 0 1 2 3 4 5 6......................................


// Example 3:
// below code will log count value , increment it and log call itself again. there's no base cond here as well.
let cnt = 0;
function f1() {
    if (cnt == 4) return; // the function where cnt will be 4 will not execute complete. it will return
    console.log(count);
    count++;
    f1();
}
//output : 0 1 2 3


//Example 4:
let a = 1;
function f1() {
    if (a == 4) return;
    console.log(a);
    a++;
    f1();
    console.log("hello", a);
}
//output:
// 0
// 1
// 2
// 3
// Hello 4
// Hello 4
// Hello 4
// Hello 4