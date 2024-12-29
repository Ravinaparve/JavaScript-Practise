// Brute Force:
// first find the length of LL
// find the mid of the LL using formula Math.floor(LL_length / 2) + 1;
// traverse the LL again and stop at node which is equal to mid and finally return that node
// TC :O(N) + O(N/2) 
// SC : O(1)


function getLen(head) {
    let temp = head;
    let count = 0;
    while (temp) { //O(n)
        count++;
        temp = temp.next;
    }

    return count;
}

var middleNode = function (head) {
    let mid = Math.floor(getLen(head) / 2) + 1

    let temp = head;
    let count = 0;
    while (temp) { //O(n/2) => since will be going only half way through the LL
        count++;
        if (count == mid) {
            return temp;
        }
        temp = temp.next;
    }
};


//........................................................................................................................
// Optimal Approach :
// TC: O(n/2) = since fastPointer moves fast skipping half of the LL.
function middleNode(head) {
    let slowPointer = head;
    let fastPointer = head;

    while (fastPointer !== null && fastPointer.next !== null) {
        slowPointer = slowPointer.next; // moves 1 steps
        fastPointer = fastPointer.next.next; // moves 2 steps
    }

    return slowPointer;// when fastPoiner reaches the last node. the slow pointer has covered half distance. which is mid and we return slow
}
