class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
function convertArrtoDLL(arr) {
    let head = new Node(arr[0]);
    let prev = head;
    for (let i = 1; i < arr.length; i++) {
        let newNode = new Node(arr[i]);
        prev.next = newNode;
        prev = newNode;
    }
    return head;
}
function printLL(head) {
    let temp = head;

    while (temp) {
        console.log(temp.data);
        temp = temp.next;
    }
}
let arr = [2, 1, 3, 5, 6];
let head = convertArrtoDLL(arr);

//Brute Force: .........................................................................................
// TC: O(n / 2) + O(n / 2) + O(n) = O(2n);
// SC: O(n); // arr data sructure used
function oddEvenLL(ll) {
    let arr = [];
    // find all the odds and push it in an arr
    let temp = head;
    while (temp !== null && temp.next !== null) { //O(n/2)
        arr.push(temp.data);
        temp = temp.next.next;
    }
    if (temp) arr.push(temp.data);


    //find all the evens and push it in an arr
    temp = head.next; // point to even place how
    while (temp !== null && temp.next !== null) { //O(n/2)
        arr.push(temp.data);
        temp = temp.next.next;
    }
    if (temp) arr.push(temp.data);
    // return arr;

    // traverse the ll again and place the values from the start

    let i = 0;

    temp = head;
    while (temp) { ////O(n)
        temp.data = arr[i];
        i++;
        temp = temp.next
    }
    return head;
}


//Optimal Force: .........................................................................................


// Optimal Approach:
//My solution
var oddEvenList = function (head) {
    if (head == null || head.next == null) return head;

    let odd = head;
    let even = head.next;
    let firstEven = even; // remeber where the even start. // firstEven and even both points to same obj

    while (even !== null && even.next !== null) { // even will always be ahead both in even and odd node length
        odd.next = even.next; // assign odd to even next
        odd = odd.next; // move the odd to its new postion. odd's next points to new odd address

        even.next = odd.next; // point even's next to new odd's next
        even = even.next;  // move the even to its new postion. odd's next points to new odd address
    }
    // console.log(firstEven); // even changed but firstEven still points to original obj
    odd.next = firstEven; // connect the last odd value to first even s

    return head;
};
let res = oddEvenList(head);
// console.log(res)