
var rotate = (mat) => {
    //transpose
    let n = mat.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]]
        }
    }
    //reverse:
    for (let i = 0; i < mat.length; i++) {
        let s = 0;
        let e = mat[i].length - 1;

        while (s < e) {
            [mat[i][s], mat[i][e]] = [mat[i][e], mat[i][s]];
            s++;
            e--;
        }
    }
    return mat;
}



var findRotation = function (mat, target) {
    if (JSON.stringify(mat) === JSON.stringify(target)) {
        return true;
    }
    let count = 0;
    
    while(JSON.stringify(mat) != JSON.stringify(target)){
        rotate(mat);

        if (JSON.stringify(mat) === JSON.stringify(target)) {
            return true;
        }

        if(count == 4) break; // when rotate 4 times it will become original matrix
    }
   
    return false;



};

mat = [[1,1],[0,1]];
target = [[1,1],[1,0]];

console.log(findRotation(mat,target));