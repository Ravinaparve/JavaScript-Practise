class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.back = null;
    }
}
// function convertArrtoDLL(arr){
//     let head = new Node(arr[0]);
//     let prev = head;

//     for(let i=1; i<arr.length; i++){
//         let newNode = new Node(arr[i]);
//         newNode.back = prev;
//         prev.next = newNode;
//         prev = newNode;
//     }
//     return head;
// }

// Create a doubly linked list:
// 1 <-> 2 <-> 3 <-> 4
let head = new Node(1);
head.next = new Node(2);
head.next.back = head;
head.next.next = new Node(3);
head.next.next.back = head.next;
head.next.next.next = new Node(4);
head.next.next.next.back = head.next.next;
// console.log(head);
// const arr = [12, 5, 6, 8, 4];
// let dll = convertArrtoDLL(arr);
// console.log(dll)

function printLL(ll) {
    let temp = ll;

    while (temp) {
        console.log(temp.data + "==>");
        temp = temp.next;
    }
}
printLL(head);

console.log(".............................")


// class Node{
//     constructor(){
//         this.data = data;
//         this.next = null;
//         this.back = null;
//     }
// }

function reverseDLL(dll) {
    let temp = dll;
    let prev;

    while (temp) {
        prev = temp.back;
        temp.back = temp.next;
        temp.next = prev;
        // console.log("temp",temp? temp.data : null)
        // console.log("prev",prev? prev.data : null)
        temp = temp.back;
        console.log("temp", temp?.data);
        console.log("prev===>", prev?.data)
    }
    // return prev.back;
}

head = reverseDLL(head);
printLL(head);





























class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
console.log(head);


// function getLen(ll){
//     let temp = ll;
//     let count = 0;
//     while(temp){
//         count++;
//         temp = temp.next;
//     }
//     return count;
// }

var reverseList = function (head) {
    let temp = head;
    let prev = null;
    let forward = null;

    while (temp) {
        let current = temp;
        let front = temp.next;

        current.next = prev;
        prev = temp;
        temp = front;

        // console.log(temp)

        // forward = temp.next;
        // temp.next = prev;
        // prev = temp;
        // temp = forward;
    }

    return prev;
};


// console.log(getLen(head));
head = reverseList(head);
console.log(head);
