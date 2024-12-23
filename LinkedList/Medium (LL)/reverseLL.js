class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
function convertArrtoLL(arr) {
    let head = new Node(arr[0]);
    let prev = head;

    for (i = 1; i < arr.length; i++) {
        let newNode = new Node(arr[i]);
        prev.next = newNode;
        prev = newNode;
    }
    return head;
}
function printLL(ll) {
    let temp = ll;
    while (temp) {
        console.log(temp.data);
        temp = temp.next;
    }
}

function reverseLL(ll) {
    let prev = null;
    let curr = ll;

    while (curr) {
        let forward = curr.next;
        curr.next = prev;

        prev = curr;
        curr = forward;
    }
    return prev;
}

let arr = [2, 6, 8, 9];
let input_ll = convertArrtoLL(arr);

printLL(input_ll);
console.log("......................");
printLL(reverseLL(input_ll))