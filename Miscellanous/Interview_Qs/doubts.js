//Q1:  What is the Difference btw 2 codes:
for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, i * 1000)
}
//o/p : 0 1 2 3 4

// v/s
for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, i * 1000)
}
// o/p : 5 5 5 5 5
//.....................................................................................................


//Q2:  What is the Difference btw 2 codes:
function a() {
    for (var i = 0; i < 3; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }
}
a();
// 3 3 3
//vs

function a() {
    for (let i = 0; i < 3; i++) {
        setTimeout(function log() {
            console.log(i);
        }, i * 1000);
    }
}
a();
// 0 1 2
//...............................................................................................


//............................
for (var i = 1; i <= 2; i++) {
    setTimeout(() => {
        alert(i);
    }, 100);
}
<<<<<<< HEAD
// get output 1 , 2 without let
=======
// output : 3 3

// Qs:  get output 1 , 2 without let from the above snippet
>>>>>>> 4c786488c508acf4157f9ea3a0648663c4c88f43

//solution
for (var i = 1; i <= 2; i++) {
    print(i);
}

function print(i) {
    setTimeout(function () {
        console.log(i);
    }, 100);
}



[
    { Phase: "Phase 1", step: "Step 1", Task: "Task 1", Value: "5" },
    { Phase: "Phase 1", step: "Step 1", Task: "Task 2", Value: "10" },
    { Phase: "Phase 2", step: "Step 2", Task: "Task 1", Value: "15" },
    { Phase: "Phase 1", step: "Step 2", Task: "Task 2", Value: "20" },
    { Phase: "Phase 2", step: "Step 1", Task: "Task 1", Value: "25" },
]

{
    "Phase 1": [
        { Phase: "Phase 1", step: "Step 1", Task: "Task 1", Value: "5" },
        { Phase: "Phase 1", step: "Step 1", Task: "Task 2", Value: "10" },
        { Phase: "Phase 1", step: "Step 2", Task: "Task 2", Value: "20" }
    ],
        "Phase 2": [
            { Phase: "Phase 2", step: "Step 2", Task: "Task 1", Value: "15" },
            { Phase: "Phase 2", step: "Step 1", Task: "Task 1", Value: "25" }
        ]
}

groupBy(data, "Phase");
function groupBy(data, key) {
    // code here
}

