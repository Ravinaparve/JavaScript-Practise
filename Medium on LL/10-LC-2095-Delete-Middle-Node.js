//Boiler Code:
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
function printLL(head) {
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
        prev = newNode;
    }
    return head;
}
let arr = [2, 1]; // n=2
let head = convertArrtoDLL(arr);


//........Brute Force...........................(My solution)...............................................
// TC:  O(N + N/2) ~ O(N)
//SC : O(1) (constant space). 
function deleteMidNode(head) {
    let len = 0;
    let temp = head;
    while (temp) {
        len++;
        temp = temp.next;
    }
    let mid = Math.floor(len / 2) + 1;
    // console.log(mid);
    temp = head;
    let prev = null;
    let count = 0;

    while (temp) {
        count++;
        if (count == mid) {
            let removeNode = temp;
            prev.next = temp.next;
            removeNode = null;
            return head;
        }
        prev = temp;
        temp = temp.next;
    }
}
let res = deleteMidNode(head);
printLL(res);



// Optimal Appraoch:
// Using Hare and Tortoise Algorithm find the mid. keep the track of node before mid i.e "Prev". so that prev's next can be pointed to mid's next. and mid can than be removed
var deleteMiddle = function (head) {
    if (head == null || head.next == null) return null;

    let slow = head;
    let fast = head;
    let prev = null;

    while (fast !== null && fast.next !== null) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    let removeNode = slow;
    prev.next = slow.next;
    removeNode = null;

    return head;
};