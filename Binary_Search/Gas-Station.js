function gasStations(arr, k) {
    let howMany = new Array(arr.length - 1).fill(0); //  partition would be length-1
    for (let gasStations = 1; gasStations <= k; gasStations++) {
        let maxSection = -1;
        let maxIndex = -1;

        for (let i = 0; i < arr.length; i++) {
            console.log(i, "i")
            let dist = arr[i + 1] - arr[i];
            console.log(dist, "dist")
            console.log(howMany, "==>howMany");
            let sectionLength = dist / (howMany[i] + 1);
            console.log(sectionLength, "section-length")

            if (sectionLength > maxSection) {
                maxSection = sectionLength;
                maxIndex = i;
            }
            console.log("maxSection", maxSection);
            console.log("maxIndex", maxIndex);
            console.log("....................................")
        }
        howMany[maxIndex]++;
        console.log("howMany", howMany);
    }
    return howMany;
}
let arr = [1, 13, 17, 23], k = 5;

console.log(gasStations(arr, k));