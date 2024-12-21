// General object logic
let obj1 = {
    data: 40,
    next: { data: 50, next: null }
}

console.log("obj1", obj1); // { data: 40, next: { data: 50, next: null } }

let removeNode = obj1; // now removeNode and obj1 both points to same object
console.log("removeNode before update", removeNode); //{ data: 40, next: { data: 50, next: null } }

obj1 = { data: 12, next: null }; // pointing obj1 to new object
console.log("removeNode after update", removeNode); //removeNode still points to the old ; { data: 40, next: { data: 50, next: null } }

//............................................................................................................
// example with LinkedList

removeElementAt(pos){  // pos = kth element 
    let count = 0;
    let temp = this.head;
    while (temp) {
        count++;
        if (count === pos - 1) {
            let removeNode = temp.next; // both variables temp.next and removeNode points to same object (Node)
            console.log(temp.next); //Node { data: 40, next: Node { data: 50, next: null } }
            console.log(removeNode);  //Node { data: 40, next: Node { data: 50, next: null } }

            temp.next = temp.next.next; //pointing "temp.next" to another new object 

            console.log(temp.next); //ode { data: 50, next: null }
            console.log(removeNode); //still points to same original object. Node { data: 40, next: Node { data: 50, next: null } }
            removeNode = null;

        }
        temp = temp.next;
    }

}

// so we can freely point the values to new node, and the prev wont be changed. unless manually changed.
// ie, till will still point to old