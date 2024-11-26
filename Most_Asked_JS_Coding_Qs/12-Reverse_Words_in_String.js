// brute force:
var reverseWords = function (s) {
    s = s.split(" ");

    let outputStr = "";

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i]) {
            outputStr += s[i] + " ";
        }
    }
    return outputStr.slice(0, outputStr.length - 1);
};

// better:

var reverseWords = function (s) {
    let words = s.split(" ").filter(word => word.length > 0); // Split the string by spaces and filter out empty strings (to avoid multiple consecutive spaces)

    words = words.reverse();  // Reverse the order of words

    return words.join(" ");  // Join the words back with a single space and return

};