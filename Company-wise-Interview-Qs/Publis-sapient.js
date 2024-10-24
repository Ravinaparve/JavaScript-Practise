const data = [
    { Phase: "Phase 1", step: "Step 1", Task: "Task 1", Value: "5" },
    { Phase: "Phase 1", step: "Step 1", Task: "Task 2", Value: "10" },
    { Phase: "Phase 2", step: "Step 2", Task: "Task 1", Value: "15" },
    { Phase: "Phase 1", step: "Step 2", Task: "Task 2", Value: "20" },
    { Phase: "Phase 2", step: "Step 1", Task: "Task 1", Value: "25" },
]




let newObj = {};
function groupBy(data, key) {
    for (let eachObj of data) {
        if (!newObj[eachObj[key]]) {
            newObj[eachObj[key]] = [];
        }
        newObj[eachObj[key]].push(eachObj)
    }
}
groupBy(data, "Phase");
console.log(newObj)



let dummyObj = { "1": [] };
let dummyData = [{ a: "1", b: "gfd" }, { a: "1", b: "fsdd" }, { a: 2, b: "dsd" }];

for (let elem of dummyData) {
    dummyObj["1"].push(elem);
}
console.log(dummyData)


    //What will be the output?
    < !DOCTYPE html >
        <html>
            <head>
                <title>Hello, World!</title>
                <link rel="stylesheet" href="styles.css" />
            </head>
            <body>
                <div class="grand-parent">
                    <div class="parent">
                        <div class="child"></div>
                    </div>
                </div>
                <script >
                    function printClass(e){
                        console.log(e.currentTarget.classList);
                        }

                    const gp = document.querySelector(".grand-parent");
                    const p = document.querySelector(".parent");
                    gp.addEventListener("click",printClass);
                    p.addEventListener("click",printClass,"true");
                </script>
            </body>
        </html>























