// Brute Force : Time limit Exceeded:
var maxProfit = function (prices) {
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        for (j = i + 1; j < prices.length; j++) {
            if (prices[j] > prices[i]) {
                diff = prices[j] - prices[i];
                maxProfit = Math.max(diff,maxProfit)
            }
        }
    }
    return maxProfit;
};

// Optimal Soln:

// keep track of the minimum of all and the check for the maximum difference. 
// the difference of most minimum to most maximum with give you the highest profit
var maxProfit = function(prices){
    let min = +Infinity;
    let maxProfit = 0;

    for(let i=0 ; i<prices.length; i++){
        if(prices[i] < min){
            min = prices[i];
        }else{
            let diff = prices[i] - min;
            maxProfit = Math.max(diff, maxProfit);
        }
    }
    return maxProfit;
}



var maxProfit = function(prices){

    let left = 0;  // buy
    let right = 1; //sell
    let maxProfit =0;

    while(left < prices.length){
        if(prices[right] > prices[left]){

            let diff = prices[right] - prices[left];
            maxProfit = Math.max(maxProfit,diff);
        }
        else{
            left = right;
        }
        right++;
    }
    return maxProfit;
}


let prices = [7,3,5,1,6,4] // o/p: 5
let result = maxProfit(prices)
console.log(result);