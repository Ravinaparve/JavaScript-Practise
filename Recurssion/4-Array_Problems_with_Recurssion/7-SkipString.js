//QS: Input =>'baccad' ; ouptut=> bccd  (a skipped)
// my Approach - working!
function skip(str, i, skipChar) {
    if (i == str.length) return str;

    if (str[i] !== skipChar) {
        return skip(str, i + 1, skipChar);
    } else {
        str = str.slice(0, i) + str.slice(i + 1);
        return skip(str, i + 1, skipChar);
    }
}

console.log(skip('baccad', 0, 'a'));

//...............................................................................................................


// pendingg
// approach 1 : Pass the answer string (ansStr) in the argument - can be passed to future function call
function skip(ansStr, str, skipChar){
    if(str=""){
        return ansStr;
    }
    
    if(str[0]==skipChar){
        console.log(str.slice(1));
        return skip(ansStr,str.slice(1),skipChar);
    }else{
        ansStr +=str[0];
        return skip(ansStr, str.slice(1), skipChar);
    }
 }
 
 console.log(skip('','baccad','a'));
 
 // approach 2 : Create the ans variable in function body:
 
 // function skip(str,i,skipChar){
 //     if(i== str.length) return;
     
 //     let ansStr="";
     
 //     if(str[i] != skipChar){
 //         ansStr +=str[i];
 //         return ansStr;
 //     }
     
 // }
 // console.log(skip('baccad',0,'a'));