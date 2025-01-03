// My solution - Brute Force:
//TC :O(n)
//SC :O(n)
function removeDuplicatesDLL(head) {
    let hashnode = new Map();

    let temp = head;
    let prev = null;

    while (temp) {
        if (hashnode.has(temp.data)) {
            if (temp.next == null) {
                prev.next = null;
                return head;
            }
            prev.next = temp.next;
            temp.next.prev = prev;
        }
        else {
            hashnode.set(temp.data, true);
            prev = temp;
        }
        temp = temp.next;
    }

    return head;
}

// Optimal Solution:

function removeDuplicates(head) {
    let temp = head;
    let nextNode = null;
    while (temp !== null && temp.next !== null) {
        nextNode = temp.next;

        while (nextNode !== null && nextNode.data == temp.data) {
            nextNode = nextNode.next;
        }
        temp.next = nextNode;
        if (nextNode) nextNode.prev = temp;

        temp = temp.next;
    }
    return head;
}
