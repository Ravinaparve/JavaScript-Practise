//Boiler Code:
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
let arr = [2, 1, 3, 5, 6, 9, 4, 7]; // n=2
let head = convertArrtoDLL(arr);


//.Brute Force:.............(My Solution  )...................................................................................
// TC: O(len) +O(len - n)  =>~~ O(2*len)  

// get the len of ll. find difference . if diff is equal to 0 means (len==n), so remove head. or return head.next;
// else traverse the ll again and reach till diff. and remove the next node after diff
function getLen(head) {
    let temp = head;
    let count = 0;
    while (temp) { //O(len) 
        count++;
        temp = temp.next;
    }
    return count;
}
var removeNthFromEnd = function (head, n) {
    if (head == null || head.next == null) return null;

    let pos = getLen(head) - n;

    if (pos == 0) { // if n is equal to length of LL (len-n == 0) , so remove head;
        // let temp1 = head;
        // head = temp1.next;
        // temp1 = null;
        return head.next;
    }

    let temp = head;
    let count = 0;

    while (temp) { // O(len-n)
        count++;
        if (count == pos) {
            let removeNode = temp.next;
            temp.next = temp.next.next;
            removeNode = null;
            return head;
        }
        temp = temp.next;
    }
};


// Optimal Approach:...........................................................................................
//https://www.youtube.com/watch?v=6gI8OMoac4Q
// Intuiton :if we intially keep the distance of n between the 2 pointer. when the fast pointer reaches the end. the slow must be at the n distance.

// start 2 pointers slow and fast from head
//move "fast" pointer "n" places ahead. thereby keeping the distance of n between slow and fast. if the fast pointer became null at this step it means the n == length of ll , so remove head
// now start moving both pointers together one place each till next of fast is null. since fast should stop at last node and not null.
// when the fast.next becomes null. the slow is at some node . slow's next is the node that we need to remove.
var removeNthFromEnd = function (head, n) {
    if (head == null || head.next == null) return null;

    let slow = head;
    let fast = head;
    let count = 1;
    while (count <= n) {
        fast = fast.next;
        count++;
    }

    if (fast == null) { // edge case : [1,2] n=2
        let temp1 = head;
        head = temp1.next;
        temp1 = null;
        return head;
    } // n== len . entire list was covered by fast. so delete head
    while (fast.next !== null) {
        slow = slow.next;
        fast = fast.next;
    }

    let removeNode = slow.next;

    slow.next = slow.next.next;
    removeNode = null;
    return head;
};
// edge cases to dry run 
//case a : [1,2] n=1 =>ans = [1]
//case b : [1,2] n=2  => ans [2]
let res = removeNthFromEnd(head, 4);
printLL(res);