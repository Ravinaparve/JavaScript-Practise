function maxLen(arr) {
    //code here
    let maxLength = 0;
    // let count =0;

    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            if (sum == 0) {
                let len = (j - i) + 1;
                maxLength = Math.max(len, maxLength);
            }
        }
    }
    console.log(maxLength);

}

let arr = [1, 0, -4, 3, 1, 0];
maxLen(arr);