var generate = function (numRows) {
    let result = [[1]]; //0

    for (let i = 1; i < numRows; i++) {
        let numCols = new Array(i + 1).fill(1); //[1,1,1]

        for (let j = 1; j < numCols.length - 1; j++) { // 
            numCols[j] = result[i-1][j] + result[i-1][j-1];
        }
        
        result.push(numCols);
    }

    return result;
};

console.log(generate(5));

