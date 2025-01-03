//Boiler Code
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
function printDLL(head) {
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
        newNode.prev = prev;
        prev = newNode;
    }
    return head;
}
let arr = [2, 5, 10, 2, 2];
let head = convertArrtoDLL(arr);


////My solution
function deleteAllKeys(head, key) {
    let temp = head;
    while (temp.data == key) {
        temp = temp.next;
    }
    head = temp;
    head.prev = null;
    let prev = null;
    let curr = head;
    //let arr=[2,5,2,4,8,10,2,2];
    while (curr) {
        if (curr.data == key) {
            if (curr.next == null) {
                prev.next = null;
                return head;
            }
            let removeNode = curr;
            prev.next = curr.next;
            curr.next.prev = prev;
        } else {
            prev = curr;
        }
        curr = curr.next;
    }
    return head;
}
let res = deleteAllKeys(head, 2);
console.log(res)
// printDLL(res)


/// Improved version of my above solution:
function deleteOccurences(head, key) {
    let temp = head;
    let prev = null;

    while (temp) {
        if (temp.data == key) {
            if (temp == head) { // if key is head, then move head
                head = temp.next;
                head.prev = null;
            } else {
                if (temp.next == null) { // if temp is last element then just point prev to null and return head
                    prev.next = null;
                    return head;
                }
                prev.next = temp.next;
                temp.next.prev = prev;
            }
        } else prev = temp;
        temp = temp.next;
    }
    return head;
}