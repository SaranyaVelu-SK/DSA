//iterative method

function swapNodes(head){
    if(!head || !head.next) return head;
    let dummy =  new ListNode();
    dummy.next = head;

    let prev = dummy;
    let curr = head
    let nxt = head.next;

    while(curr && nxt){
        prev.next = nxt;
        curr.next = nxt.next;
        nxt.next = curr;

        prev = curr;
        curr = prev.next;
        nxt = curr && curr.next;

    }
    return dummy.next;

}

//recursive approach


function swapPairs(head){
    if(!head ||!head.next) return head;

    let l = head;
    let r = head.next;

    l.next = swapPairs(r.next);
    r.next =l;
    return r
}