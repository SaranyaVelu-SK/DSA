//Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

// The first node is considered odd (1st position), the second is even (2nd position), and so on.

function oddEvenLL(head){
    if(!head || !head.next)return head;
    let odd = head;
    let even = head.next;
    let connecter = even;

    while(odd.next && even.next){
        odd.next =odd.next.next;
        even.next=even.next.next;
        odd= odd.next;
        even=even.next;
    }
    odd.next = connecter;
    return head;
}