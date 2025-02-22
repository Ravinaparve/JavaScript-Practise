//Q1  print names 5 times
let count = 1;
function printName(name) {
    if (count > 5) return;
    console.log(name);
    count++;
    printName(name);
    // console.log("Hello",count)
}
printName("John");

//..............................................................................................
//Q2:  print names n times
// TC : O(n): since we are calling nearly about n functions
//SC : O(n) : the computer internally uses stack space to store all the fns
// method 1
function printNtimes(name, n) {
    if (n == 0) return;
    console.log(name);
    printNtimes(name, n - 1);
}

printNtimes("Peter", 5);


// method 2:
function printNtimes(i, n) {
    if (i > n) return;
    console.log("Alex");
    printNtimes(i + 1, n);
}
printNtimes(1, 3); // this prints name 3 times


//..............................................................................................
//Q3: Print linearly from 1 to N:
function print(i, n) {
    if (i > n) return;
    console.log(i);
    print(i + 1, n);
}
print(1, 5);

//or

let i = 1;
function print(n) {
    if (i > n) return;
    console.log(i);
    i++;
    print(n);
}


//..............................................................................................
//Q: Print from N to 1
function print(i, n) {
    if (i == 0) return;
    console.log(i);
    print(i - 1, n);
}
print(5, 5);


//or:
function print(n) {
    if (n == 0) return;
    console.log(n);
    print(n - 1);
}
print(5);

//..............................................................................................
//Q: Print from 1 to N (using backtracking)

function print(i, n) {
    if (i == 0) return;
    print(i - 1, n);
    console.log(i); //this line execute after the base case is meet. by logging after the fn() call line we made sure this get executed first after all function calls reach the base case. so once i becomes 0 , it will start print from i=1 when returning back. this is called backtracking
}
print(5, 5); // this prints from 1 -5


//Q: Print from  N to 1(using backtracking)

function print(i, n) {
    if (i > n) return;
    print(i + 1, n);
    console.log(i);// this log only when the base case is reached. ie when i becomes greater than 3. 
    // i becomes greater than 3 by the above the function recurssively called by passing i+1. this make it reach i to 4 and start returning from there where current i=3. the base case fn never executes it just return, but fn before that is where 3 2 1 starts printing
}
print(1, 3); // 3 2 1