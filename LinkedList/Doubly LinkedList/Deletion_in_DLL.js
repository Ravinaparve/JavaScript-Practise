// delete head
// delete tail
// element at kth position
// delete the given element/node

class Node {
    constructor(data, next = null, back = null) {
        this.data = data;
        this.next = next;
        this.back = back;
    }
}

class DLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
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

    printLL() {
        let temp = this.head;

        while (temp) {
            console.log(temp.data);
            temp = temp.next;
        }
    }

    deleteHead() {
        if (this.head == null || this.head.next == null) return;
        else {
            let temp = this.head;
            this.head = temp.next;
            this.head.back = null;
            temp.next = null;
        }
    }

    deleteTail() {
        if (this.head == null || this.head.next == null) return;

        else {
            let temp = this.tail;
            this.tail = temp.back;
            temp.back = null;
            this.tail.next = null;
        }
    }

    deleteElementAt(pos) {
        if (pos == 1) {
            if (this.head == null) return;
            else this.deleteHead();
        }

        if (pos == this.getLen()) this.deleteTail();

        else {
            let temp = this.head;
            let count = 0;

            while (temp) {
                count++;
                if (count == pos - 1) {
                    let removeNode = temp.next;
                    temp.next = temp.next.next;
                    temp.next.next.back = temp;
                    removeNode = null;
                }
                temp = temp.next;
            }
        }
    }

    deleteNode(node) {
        let prev = node.back;
        let forward = node.next;

        if (forward == null) {
            prev.next = null;
            node.back = null;
            node = null;
            return;
        }
        prev.next = forward;
        forward.back = prev;
        node.next = null;
        node.back = null;

    }
}

let dll = new DLinkedList();
dll.insertItemAtEnd(11);
dll.insertItemAtEnd(12);
dll.insertItemAtEnd(13);
// dll.insertItemAtEnd(14);
// dll.insertItemAtEnd(15);


dll.printLL();

console.log("..................................")


// dll.deleteHead();
// dll.deleteElementAt(5);
// dll.insertItemAtEnd(20);

dll.deleteNode(dll.head.next.next);
dll.printLL();
