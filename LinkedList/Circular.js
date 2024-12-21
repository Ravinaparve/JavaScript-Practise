// in circular LL there is no logic of insert at head or insert at tail because the LL is circular.
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Circular_SLL {
    constructor() {
        this.tail = null;
    }

    printCLL() {

        if (this.tail == null) {
            console.log("list is empty");
            return;
        }
        let temp = this.tail; // remember address of tail in "temp" variable

        do {
            console.log(this.tail.data);
            this.tail = this.tail.next; // keep moving
        }
        while (this.tail !== temp); // log data and keep moving tail until it matches the original address of tail which was stored in temp
    }

    insertAfterValue(val, newValue) {
        let newNode = new Node(newValue);
        // empty list
        if (this.tail == null) {
            this.tail = newNode;
            newNode.next = this.tail; // single circular new node points back to itself
        }
        else {
            // non-empty list
            let temp = this.tail;

            while (temp.data !== val) {
                temp = temp.next;
            }
            newNode.next = temp.next;
            temp.next = newNode;
            //   console.log("temp", temp);
        }
    }

    deleteNode(val) {
        if (this.tail == null) {
            console.log("List is empty..");
            return;
        }

        else {

            let prev = this.tail;
            let temp = prev.next; // points to the first node which was creates when list was empty

            if (prev == temp) { // only one node
                this.tail = null;
                return;
            }

            while (temp.data !== val) {
                prev = temp;
                temp = temp.next;
            }
            prev.next = temp.next;
            console.log(temp);  //Node { data: 20, next: {data: 30...} } (first node which also point to tail. when trying to print LL now will get error because temp.next= null.. and tail.next will also be null. so print loop will not run. so point tail to anything else. prev or next; )
            if (this.tail == temp) { // 
                this.tail = prev;
            }
            temp.next = null;
            temp = null;
        }
    }
}

let cll = new Circular_SLL();
cll.insertAfterValue(10, 20);
// cll.insertAfterValue(20, 30);
// cll.insertAfterValue(30, 40);
// cll.insertAfterValue(40, 50);
// cll.insertAfterValue(30, 35);
cll.printCLL();

console.log(".........................................")
cll.deleteNode(20);
cll.printCLL();
