//Q1:  What is the Difference btw 2 codes:
for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, i * 1000)
}
// v/s
for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, i * 1000)
}
//.....................................................................................................


//Q2:  What is the Difference btw 2 codes:
function a() {
    for (var i = 0; i < 3; i++) {
        setTimeout(function log() {
            console.log(i);
        }, i * 1000);
    }
}
a();
//vs

function a() {
    for (let i = 0; i < 3; i++) {
        setTimeout(function log() {
            console.log(i);
        }, i * 1000);
    }
}
a();

//...............................................................................................


//............................
for (var i = 1; i <= 2; i++) {
    setTimeout(() => {
        alert(i);
    }, 100);
}
// get output 1 , 2 without let

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

