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
let arr = [1, 2, 1];
let head = convertArrtoDLL(arr);


function getMid(head) {
    let slow = head;
    let fast = head;
    let prev = null;
    while (fast !== null && fast.next !== null) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    prev.next = null; // this changes the structure of Head globally. pointing prev of (mid/slow) to next, splits the ll to half.
    return slow; // this is mid
}

function reverseLL(head) {
    let curr = head;
    let prev = null;

    while (curr !== null) {
        let front = curr.next;
        curr.next = prev;
        prev = curr;
        curr = front;
    }
    return prev;
};

function checkPalindrome(head) { //[1,2,1]
    if (head == null || head.next == null) return false;
    let mid = getMid(head); //// this had split the ll into half. head is modified globally
    let reverseList = reverseLL(mid);

    console.log("head till mid =>", head); // Node { data: 1, next: null }
    console.log("reverseList", reverseList); //Node { data: 1, next: Node { data: 2, next: null } }

    while (head !== null && reverseList !== null) { // node 2 is never checked here
        if (head.data !== reverseList.data) {
            return false;
        }
        console.log(head.data + "==" + reverseList.data); //1==1
        head = head.next;
        reverseList = reverseList.next;
    }
    return true;

}

console.log(checkPalindrome(head));

// in case of odd ll ,[1,2,1] the center value is not checked. and since its common in both the splitted LL , we dont need to check it