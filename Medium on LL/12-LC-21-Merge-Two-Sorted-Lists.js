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


//Brute Force: ....................................................................................................
function mergeTwoLists(list1, list2) {
    if (list1 == null) return list2;

    if (list2 == null) return list1;

    let dummyNode = new Node(-1);
    let temp = dummyNode;

    while (list1 !== null && list2 !== null) {
        if (list1.data <= list2.data) {
            temp.next = list1;
            list1 = list1.next;
        } else {
            temp.next = list2;
            list2 = list2.next;
        }
        temp = temp.next;
    }

    // If any list still has remaining elements,
    // append them to the merged list
    if (list1 != null) {
        temp.next = list1;
    } else {
        temp.next = list2;
    }

    return dummyNode.next;
}

// Optimal Approach - Using Recurssion....................................................................

var mergeTwoLists = function (list1, list2) {
    if (list1 == null) return list2;
    if (list2 == null) return list1;

    let result;
    if (list1.val < list2.val) {
        result = list1;
        result.next = mergeTwoLists(list1.next, list2);
    } else {
        result = list2;
        result.next = mergeTwoLists(list1, list2.next);
    }

    return result;
};


let list1 = convertArrtoDLL([1, 2, 4, 6, 9, 12]);
let list2 = convertArrtoDLL([1, 3, 4, 8, 9, 11]);
let res = mergeTwoLists(list1, list2);
printLL(res);
