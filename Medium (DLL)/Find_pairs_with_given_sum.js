//Boiler Code
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
function printDLL(head) {
    let temp = head;
    while (temp) {
        console.log(temp.data);
        temp = temp.next;
    }
}
function convertArrtoDLL(arr) {
    let head = new Node(arr[0]);
    let prev = head;
    for (let i = 1; i < arr.length; i++) {
        let newNode = new Node(arr[i]);
        prev.next = newNode;
        newNode.prev = prev;
        prev = newNode;
    }
    return head;
}
let arr = [1, 2, 4, 5, 6, 8, 9];
let head = convertArrtoDLL(arr);



// Optimal Approach:
//TC : O(n) +O(n) = O(2n)
//SC :O(1) : since not using any ds to solve the problem. on used one to store the ans. 
function findPairs(head, target) {
    let result = [];
    let temp = head;
    while (temp.next) { // find tail  O(n)
        temp = temp.next;
    }
    let right = temp;
    let left = head;

    while (left.data <= right.data) { //O(n) : since visiting every node

        let sum = left.data + right.data;

        if (sum == target) {
            result.push([left.data, right.data]);
            left = left.next;
            right = right.prev;
        }
        else if (sum < target) left = left.next;

        else right = right.prev;
    }
    return result;
}

let res = findPairs(head, 7);
console.log(res)
// printDLL(res);