//Boiler Code:
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
function printLL(head) {
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
        prev = newNode;
    }
    return head;
}
let arr = [1, 2, 2, 0, 0, 0, 1, 2, 1, 2, 0];
let head = convertArrtoDLL(arr);


// Brute Force:......................................................................................
//TC :O(2n) SC:O(1)
function sortLL(head) {
    let count0 = 0, count1 = 0, count2 = 0;
    let temp = head;

    while (temp) { // O(n)
        if (temp.data == 0) count0++;
        else if (temp.data == 1) count1++;
        else count2++;
        temp = temp.next;
    }

    temp = head;

    while (temp) { //O(n)
        if (count0) {
            temp.data = 0;
            count0--;
        }
        else if (count1) {
            temp.data = 1;
            count1--;
        }
        else {
            temp.data = 2;
            count2--;
        }
        temp = temp.next;
    }

    return head;
}


//1 pass solution - optimal
//TC: O(n) ; SC:O(1)

function sortLL(head) {
    let list0 = new Node(-1), list1 = new Node(-1), list2 = new Node(-1);
    let tempList0 = list0;
    let tempList1 = list1;
    let tempList2 = list2;

    let temp = head;
    while (temp) {
        if (temp.data == 0) {
            tempList0.next = temp;
            tempList0 = tempList0.next;
        }
        else if (temp.data == 1) {
            tempList1.next = temp;
            tempList1 = tempList1.next;
        }
        else {
            tempList2.next = temp;
            tempList2 = tempList2.next;
        }
        temp = temp.next;
    }
    // console.log("tempList0",tempList0);
    // console.log("tempList1",tempList1);
    // console.log(list0.next)
    // console.log(list1.next)
    // console.log(list2.next)

    tempList0.next = (list1.next) ? list1.next : list2.next;
    tempList1.next = (list2.next) ? list2.next : null;
    tempList2.next = null;

    return list0.next; // new Head

}





let res = sortLL(head);
printLL(res);
