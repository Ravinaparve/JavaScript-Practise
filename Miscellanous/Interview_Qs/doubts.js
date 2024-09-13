// Difference btw 2 codes:
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
//..................................................................................
function a() {
    for (var i = 0; i < 3; i++) {
        setTimeout(function log() {
            console.log(i);
        }, i * 1000);
    }
}

//vs

function a() {
    for (let i = 0; i < 3; i++) {
        setTimeout(function log() {
            console.log(i);
        }, i * 1000);
    }
}