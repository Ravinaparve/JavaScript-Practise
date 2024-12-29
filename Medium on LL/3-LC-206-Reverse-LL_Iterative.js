class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
function convertArrtoDLL(arr) {
    let head = new Node(arr[0]);
    let prev = head;
    for (let i = 0; i < arr.length; i++) {
        let newNode = new Node(arr[i]);
        prev.next = newNode;
        newNode = prev;
    }
    return head;
}
function printLL(head) {
    let temp = head;
    while (temp) {
        console.log(temp);
        temp = temp.next;
    }
}

// Iterative Approach:..........................................................
//TC : O(n) ; SC: O(1);

function reverseLL(head, curr, prev) {
    let prev = null;
    let curr = head;

    while (curr !== null) {

        let front = curr.next;
        curr.next = prev;
        prev = curr;
        curr = front;
    }

    return prev;
}


// Recurssive Approach:

// ---PENDING....




















let arr = [2, 6, 8, 9];
let input_ll = convertArrtoDLL(arr);
printLL(reverseLL(input_ll));
