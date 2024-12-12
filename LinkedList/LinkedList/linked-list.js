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
        this.head = newNode;
    }

    insertAtEnd(val) {
        let newNode = new Node(val);
        if (this.head == null) {
            this.head = newNode;
        } else {
            let temp = this.head;
            while (temp.next) {
                temp = temp.next;
            }
            temp.next = newNode;
        }
        this.tail = newNode;
    }

    insertInBetween(val, pos) {
        let newNode = new Node(val);

        if (pos == 1) {
            if (this.head == null) {
                this.head = newNode
            } else {
                newNode.next = this.head;
                this.head = newNode;
            }
        }
        else {
            let temp = this.head;
            let count = 0;
            let prevNode;
            while (temp) {
                count++;
                if (count == pos - 1) {
                    prevNode = temp;
                    newNode.next = prevNode.next;
                    prevNode.next = newNode;

                }
                temp = temp.next;
            }
        }

    }

    insertAfter(val, pos) {

    }

    checkIfPresent(val) {
        let temp = this.head;

        while (temp) {
            if (temp.data == val) return true;
            temp = temp.next;
        }
        return false;
    }

    removeHead() {
        if (this.head == null) return;
        let temp = this.head;
        this.head = temp.next;
        temp = null;
    }

    printLL() {
        let temp = this.head;
        while (temp) {
            console.log(temp.data);
            temp = temp.next;
        }
    }

    getLen() {
        let temp = this.head;
        let count = 0;
        while (temp) {
            count++;
            temp = temp.next;
        }
        this.size = count;
        return count;
    }

    updateHead() { }
    updateTail() { }

}





// 4
// 10 4

// Node { data: 4, next: null } 
// Node { data: 10, next: { data: 4, next: null } }--> head

let ll = new LinkedList();
ll.insertAtHead(4);
console.log(ll.head);
console.log(ll);

ll.insertAtHead(10);
console.log(ll.head);
ll.printLL(this.head);


console.log(ll.getLen());
console.log("size", ll.size);


console.log(ll.updateTail({ data: 12, next: null }));
console.log("tail", ll.tail);








