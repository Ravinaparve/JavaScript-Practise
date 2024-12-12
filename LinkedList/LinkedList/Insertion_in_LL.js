class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    printLL() {
        let temp = this.head;
        while (temp) {
            console.log(temp.data);
            temp = temp.next;
        }
    }
    insertAtHead(val) { // TC : O(1)
        let node = new Node(val);
        if (this.head == null) {
            this.head = node;
        } else {
            node.next = this.head;
        }
        this.head = node; // updating the global value
    }

    insertAtTail(val) {
        let node = new Node(val);

        if (this.head == null) {
            this.head = node;
        } else {
            let temp = this.head;
            while (temp.next) {
                temp = temp.next; // stop at the last element
            }
            temp.next = node;
        }
    }

    // TC : O(n)
    insertAtPosition(pos, val) {
        let node = new Node(val);

        if (pos == 1) {
            if (this.head == null) {
                this.head = node;
            } else {
                node.next = this.head;
                this.head = node;
            }
        }
        else {
            let temp = this.head;
            let count = 0;
            let prev;
            while (temp) {
                count++;
                if (count == pos) {
                    prev.next = node;
                    node.next = temp;
                }
                prev = temp;
                temp = temp.next;
            }
        }
    }

    // insert element before the val x
    insertBeforeValue(newVal, beforeVal) {
        let node = new Node(newVal);

        if (this.head == null) return null;
        else if (this.head.data == beforeVal) {
            node.next = this.head;
            this.head = node;
        }
        else {
            let temp = this.head;
            let prev;
            while (temp) {
                if (temp.data == beforeVal) {
                    node.next = temp;
                    prev.next = node;
                }
                prev = temp;
                temp = temp.next;
            }
        }

    }

    searchElement(val) {
        let temp = this.head;

        while (temp) {
            if (temp.data == val) {
                return true;
            }
            temp = temp.next;
        }
        return false;
    }



}