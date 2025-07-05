function mergeSortedLLs(l1,l2){
    let sentinel = new ListNode();
    let curr = sentinel;

    while(l1 && l2){
        if(l1.val <l2.val){
            curr.next = l1;
            l1 =l1.next;
        }
        else{
            curr.next = l2;
            l2=l2.next;
        }
        curr = curr.next;
    }
    if(!l1){
        curr.next =l2;
    }
    if(!l2){
        curr.next = l1
    }
    return sentinel.next;
}

//without sentinel  -need to handle corner case

if(!l1) return l2;
if(!l2) return l1;

let curr =null;

if(l1.val <l2.val){
    curr =l1;
    l1=l1.next;
} else{
    curr = l2;
    l2=l2.next;
}

let start = curr;
// remaining while loop code

return start;