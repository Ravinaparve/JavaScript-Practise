function NumberOfStudents(arr, pages) {
    //pages =>maximum pages allowed to be hold by a student
    let studentCount = 1;
    let pagesStudentHold = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] + pagesStudentHold <= pages) {
            pagesStudentHold += arr[i];
        } else {
            studentCount++;
            pagesStudentHold = arr[i];
        }
    }
    return studentCount;
}


function allocateBooks(arr, m) {
    let min = Math.max(...arr);
    let max = arr.reduce((acc, i) => acc + arr[i], 0);

    for (let i = min; i <= max; i++) {
        let countStudents = NumberOfStudents(arr, i);
        if (countStudents == m) {
            return i;
        }
    }
}