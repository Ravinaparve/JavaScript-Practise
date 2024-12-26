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

let arr = [2, 6, 8, 9, 5];
let head = convertArrtoDLL(arr);
let tail = getTail(head);
tail.next = head.next; // making the LL cyclic for this problem
console.log("tail=>", tail);
//......................................................................................................................
// Brute Force - using Hash map:

function countNodesinLoop(head) {
    let nodeMap = new Map();
    let temp = head;
    let entry = null;
    while (temp) {
        if (nodeMap.has(temp)) {
            entry = temp;
            break;
        } else {
            nodeMap.set(temp, true);
        }
        temp = temp.next;
    }
    // console.log(entry);
    if (entry == null) return 0;
    let mover = entry;
    let count = 0;
    do {
        count++;
        mover = mover.next;
    } while (mover !== entry);

    return count;
}
console.log(countNodesinLoop(head));

//.............................................................................................................
// Optimal Approach - Hare and Tortoise Algo:
function countNodesinLoop(head) {
    let slow = head;
    let fast = head;
    let entry = null;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow == fast) {
            let slow = head;
            while (slow !== fast) {
                slow = slow.next;
                fast = fast.next;
            }
            entry = slow;
            break;
        }
    }
    if (entry == null) return 0;
    let mover = entry;
    let count = 0;
    do {
        count++;
        mover = mover.next;
    } while (mover !== entry);

    return count;
}