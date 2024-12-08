let head = {
    data: 12,
    next: {
        data: 13,
        next: {
            data: 14,
            next: null
        }
    }
};

// to avoid modification to head directly we are using "temp". never tamper the "head"

let temp = head;
while (temp) {
    console.log(temp.next);
    temp = temp.next;
}

// output:
// { data: 13, next: { data: 14, next: null } }
// { data: 14, next: null }
// null

console.log(head); // { data: 12, next: { data: 13, next: { data: 14, next: null } } }
console.log(temp); // null