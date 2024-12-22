// Boiler Code 
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
function convertArrtoDLL(arr) {
    let head = new Node(arr[0]);
    let prev = head;
    for (let i = 1; i < arr.length; i++) {
        let newNode = new Node(arr[i]);
        prev.next = newNode;
        prev = newNode;
    }
    return head;
}

let arr = [2, 6, 8, 9];
let input_ll = convertArrtoDLL(arr);
input_ll.next.next = input_ll.next;
console.log(input_ll);
//..................................................................................................................
//Refer 2-Map.js to understand how objects stored as keys asre compared in the map
//Brute Force:
// go through each node, and store it in hashmap as {node, true} to point out that its visited.
// move forward in the LL. and check everytime if current node already exists in hashmap.
//  if yes, it means it was visited before and the current node is pointing to already visited node, which means its a cycle
//TC : O(n) ; SC: O(n);
var hasCycle = function (head) {
    let temp = head;
    let nodeMap = new Map();

    while (temp) {
        if (nodeMap.has(temp)) {
            return true;
        } else {
            nodeMap.set(temp, true);
        }
        temp = temp.next;
    }
    return false;
};
