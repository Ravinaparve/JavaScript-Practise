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

function getTail(head) {
    let temp = head;
    while (temp.next) {
        temp = temp.next;
    }
    return temp;
}

let arr = [2, 6, 8, 9];
let head = convertArrtoDLL(arr);
let tail = getTail(head);
tail.next = head.next; // making the LL cyclic for this problem
// console.log("tail=>",tail);
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


// Optimal Approach:
//TC: O(n)
//SC :O(1)

var hasCycle = function (head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next; // Move slow one step
        fast = fast.next.next; // Move fast two steps

        // Check if slow and fast pointers meet
        if (slow == fast) return true; // loop detected
    }
    return false;
};


//This algorithm uses two pointers, fast and slow, to traverse the linked list. The fast pointer moves twice as fast as the slow pointer. If there is a cycle, the fast pointer will eventually catch up to the slow pointer. If there is no cycle, the fast pointer will reach the end of the list, and the function will return False. This algorithm is an efficient way to detect cycles in a singly-linked list.

// when there a loop and slow and fast pointers enter the loop . the distance between fast and slow starts decreasing at every iteration from there on. and at one point they will meet at same point. so we can conclude that there's a cycle

// the question is will they meet if slow is moved 1 step and fast is moved 3 or more steps ??????