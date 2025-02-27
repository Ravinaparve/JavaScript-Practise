
// INVERTED TRIANGLE:

// function printPattern(n){
//   let str="";
//   for(let i=0; i<=n; i++){
//       for(let j=n-i ;j>=1; j--){
//           str+="*";
//       }
//       str+='\n';
//   }
//     return str;
// }

//using recurssion:
let str = "";
function printPattern(r, c) {
    if (r == 0) {
        return;
    }
    if (c < r) {
        str += '*';
        printPattern(r, c + 1);
    } else {
        str += '\n';
        printPattern(r - 1, 0);
    }
}

printPattern(4, 0);
console.log(str);

// * * * *
// * * *
// * *
// * 