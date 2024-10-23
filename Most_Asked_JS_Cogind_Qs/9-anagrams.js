// Check if 2 string are Anagrams
//Create a function which will accepts two arrays arr1 and arr2.
//The function should return true if every value in arr1 has its corresponding value squared in array2.
//The frequency of values must be same.

function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) return false;

    let charCount1 = {};
    let charCount2 = {};

    for (let char of str1) {
        charCount1[char] = (charCount1[char] || 0) + 1;
    }

    for (let char of str2) {
        charCount2[char] = (charCount2[char] || 0) + 1;
    }

    console.log(charCount1);
    console.log(charCount2);

    for (let val in charCount1) {
        if (charCount1[val] !== charCount2[val]) {
            return false;
        }
    }
    return true;
}

//// Example usage:
// console.log(areAnagrams("listen", "silent"));   // true
// console.log(areAnagrams("hello", "world"));     // false
console.log(areAnagrams("apple", "ppale"));     // true
console.log(areAnagrams("hello", "olleh"));     // true