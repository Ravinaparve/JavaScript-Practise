// head is not pointing to entire LL. it just pointing to first node
// though in the JS , it looks like we head is storing entire LL. but its not.



// when you want to traverse till the end of LL, like inserting in the end:
while (temp.next) { // this stops before the temp become null and stops at last element.
    temp = temp.next; // 34
}
temp.next = node; // if you want to do some actions for the last element of LL


// when you want to traverse, but you will stop/ break in between and not traverse till the end. use:
while (temp) { // this will move till the temp become null and till the temp is out of the LL.  
    count++; // do some steps before end of ll
    temp = temp.next
}


// always first draw on paper and then solve it.
// never traverse till the elem that you want to delete (count = pos-1)
// dont make additional unnecessary variables
// after variables are used eg temp setting them back to null is a good practise