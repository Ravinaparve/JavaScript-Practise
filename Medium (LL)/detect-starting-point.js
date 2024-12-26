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
let head = convertArrtoDLL(arr);

//......................................................................................................................

//Brute Force: - using hashmap

var detectCycle = function (head) {
    let nodeMap = new Map();
    let temp = head;

    while (temp) {

        if (nodeMap.has(temp)) {
            return temp;
        } else {
            nodeMap.set(temp, true);
        }
        temp = temp.next;
    }
    return null;
};


// Optimal Approach:............................................................................................
// Refer Videos: 
// 1. https://www.youtube.com/watch?v=95ZfuoSAUPI
// 2. https://www.youtube.com/watch?v=vlrxs-LPni4&t=722s

var detectCycle = function (head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow == fast) {
            slow = head;
            while (fast !== slow) {
                fast = fast.next;
                slow = slow.next;
            }
            return slow;
        }
    }
    return null;

};
