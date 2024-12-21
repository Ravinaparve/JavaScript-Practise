//insert before the head
//insert before the tail
//insert before the kth node
//insert before the given node

//insert after the head
//insert after the tail
//insert after the kth node
//insert after the given node

// Insertion in DLL:

//insert after the head
//insert after the tail
//insert after the kth node
//insert after the given node
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.back = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    printLL() {
        if (this.head == null) return;
        else {
            let temp = this.head;
            while (temp) {
                console.log(temp.data);
                temp = temp.next;
            }
        }
    }

    //insert before the head
    insertBeforeHead(val) {
        let node = new Node(val);

        if (this.head == null) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head.back = node;
            this.head = node;
        }
    }

    //insert before the tail
    insertBeforeTail(val) {
        let node = new Node(val);

        if (this.head == null) return; // this line is okay if not provided

        else if (this.head.next == null) {
            this.insertBeforeHead(val);
        }
        else {
            let temp = this.head;
            while (temp.next) {
                temp = temp.next;
            }

            let prev = temp.back; //temp is the tail
            node.back = prev;
            node.next = temp;//

            prev.next = node;
            temp.back = node;

        }
    }

    // insert at tail
    insertAfterTail(val) {
        let newNode = new Node(val);
        let temp = this.head;

        while (temp.next) {
            temp = temp.next;
        }
        temp.next = newNode;
        newNode.back = temp;
        this.tail = newNode;

    }
    //insert before the kth position
    insertBefore(pos, val) {
        if (pos == 1) {
            if (this.head == null) {
                this.head = node;
            } else {
                this.insertBeforeHead(val);
            }
        } else {
            let count = 0;
            let temp = this.head;
            while (temp) {
                count++;
                if (count == pos - 1) {
                    let newNode = new Node(val);

                    newNode.next = temp.next;
                    temp.next.back = newNode;

                    temp.next = newNode;
                    newNode.back = temp;
                    // console.log(node);
                }
                temp = temp.next;
            }
        }
    }

    //insert before the given node. (given that node will not be equal to head)
    insertBeforeNode(node, val) {

        if (this.head == null) return;

        else {
            let prev = node.back;
            let newNode = new Node(val);
            prev.next = newNode;
            newNode.next = node;
        }
    }
}

let dll = new LinkedList();
dll.insertBeforeHead(40);
dll.insertBeforeHead(30);
dll.insertBeforeHead(20);
dll.insertBeforeHead(10);
dll.printLL();

console.log(".................................")

// dll.insertBeforeTail(50);
// dll.insertBeforeTail(50);
dll.insertBefore(3, 78)
// dll.insertBeforeNode(dll.head.next.next,12);
// 
dll.printLL();
