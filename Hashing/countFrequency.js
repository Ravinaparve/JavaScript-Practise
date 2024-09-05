https://www.modernjs.com/data-types.html#loop-methods-map

var countFrequency =(arr)=>{
    let obj={};

    for(let i=0; i<arr.length;i++){
        if ( arr[i] in obj){
            obj[arr[i]] +=1;
        }
        else{
            obj[arr[i]] = 1;
        }
    }

    console.log(obj);
    let max = -Infinity;
    let highestElem , lowestElem;
    
    for (let key in obj){
        if(obj[key] > max){
           max = obj[key];
           highestElem = key;
        }
        else{
            lowestElem =key;
        }
    }
    
    console.log(highestElem);
    console.log(lowestElem);
}
countFrequency(arr);

// count frequency using Map();
function countOccurrences(arr) {
    const counts = new Map();
    for (const element of arr) {
      counts.set(element, counts.get(element) + 1 || 1);
    }
    return counts;
  }
  const arr = [1, 2, 3, 2, 1, 3, 1, 4, 2];
  const occurrences = countOccurrences(arr);
  console.log(occurrences);

