class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    insertAtHead(val) {
        let newNode = new Node(val);
        if (this.head == null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.head = newNode; // updating the global value
    }
    printLL() {
        let temp = this.head;
        while (temp) {
            console.log(temp.data);
            temp = temp.next;
        }
    }
    getLen() {
        let count = 0;
        if (this.head == null) return 0;
        else {
            let temp = this.head;
            while (temp) {
                count++;
                temp = temp.next
            }
            this.size = count;
        }
        return count;
    }

    removeHead() {
        if (this.head == null) return;
        else {
            let temp = this.head;
            this.head = temp.next; // move position of head first
            temp = null; // now remove the original head
        }
    }

    removeTail() {
        if (this.head == null || this.head.next == null) return; // retuturn nothing if there's no element or just a single element. because for single. head== tail . if we remove head, there will be no LL . 

        let temp = this.head;

        while (temp.next.next) { // stop at the 2nd last element.
            temp = temp.next
        }
        temp.next = null; // and set the second last element to null. this will remove reference to last element
        this.tail = temp; // tail points to new tail
        console.log("new tail==>", this.tail);
    }

    // removes kth element from the list
    // check if k is either head, tail or greater than ll size
    // TC: O(k)
    removeElementAt(pos) { // pos = kth element 
        if (this.head == null) return;

        let size = this.getLen();
        if (pos > size) return;

        else if (pos == 1) {
            let temp = this.head;
            this.head = temp.next;
            temp = null;
        }
        else {
            let count = 0;
            let temp = this.head;
            while (temp) {
                count++;
                if (count === pos - 1) {
                    let removeNode = temp.next; //  both temp.next and removeNode points to same obj
                    temp.next = temp.next.next;
                    removeNode = null; // the node still points to the obj at temp.next. so free memory by setting null
                }
                temp = temp.next;
            }
        }
    }

    removeElement(val) {
        if (this.head == null) return;

        else if (this.head.data == val) { // remove head
            let temp1 = this.head;
            this.head = temp1.next;
            temp1 = null;
        }
        else {
            let temp = this.head;
            let prev = null;
            while (temp) {
                if (temp.data == val) {
                    prev.next = temp.next;
                    break;
                }
                prev = temp;
                temp = temp.next;
            }
        }
    }
}

let ll = new LinkedList();
ll.insertAtHead(50);
ll.insertAtHead(40);
ll.insertAtHead(20);
ll.insertAtHead(10);
ll.printLL();
console.log(".....................")
// ll.removeTail();
// ll.removeElementAt(5);
ll.removeElement(10)

ll.printLL();
