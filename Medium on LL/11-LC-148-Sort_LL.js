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
let arr = [2, 1];
let head = convertArrtoDLL(arr);

// Brute Force (My solution)........................
//TC : O(2n)+ O(n log n);
//SC : O(n)
var sortList = function (head) {
    if (head == null) return null;
    let arr = [];
    let temp = head;
    while (temp) { //O(n)
        arr.push(temp.val);
        temp = temp.next;
    }

    arr.sort((a, b) => a - b); // sorts in place;   O(n log n)

    temp = head;
    let i = 0;
    while (temp) { //O(n)
        temp.val = arr[i];
        i++;
        temp = temp.next;
    }
    return head;
};

//Optimal Approach - Not complete:
//Merge sort:
function getMid(head) {
    // If the list is empty or has only one node,
    // the middle is the head itself
    if (head === null || head.next === null) {
        return head;
    }
    let slow = head;
    let fast = head.next;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

function mergeSortedLL(list1, list2) {
    if (list1 == null) return list2;

    if (list2 == null) return list1;

    let dummyNode = new Node(-1);
    let temp = dummyNode;

    while (list1 !== null && list2 !== null) {
        if (list1.data <= list2.data) {
            temp.next = list1;
            list1 = list1.next;
        } else {
            temp.next = list2;
            list2 = list2.next;
        }
        temp = temp.next;
    }

    // If any list still has remaining elements,
    // append them to the merged list
    if (list1 != null) {
        temp.next = list1;
    } else {
        temp.next = list2;
    }

    return dummyNode.next;
}

function mergeSort(head) {
    if (head == null || head.next == null) return head;

    // break linked list into 2 halves, after finding mid
    let mid = getMid(head);
    let right = mid.next;
    mid.next = null;
    let left = head;

    //recurssive calls to sort both halves
    left = mergeSort(left);
    right = mergeSort(right);

    //merge both left and right halves
    let result = mergeSortedLL(left, right);

    return result;
}


let res = sortList(head);
printLL(res);