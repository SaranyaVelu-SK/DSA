var rotateRight = function(head, k) {
    if (!head || !head.next || k === 0) return head;
    //finding length of the LL
    let curr =head;
    let length = 0;
    while(curr){
        curr=curr.next;
        length++;
    }

    // optimize k value 

    k = k % length;
     if (k === 0) return head;

    //move to the node that is last before and after k rotations by 2 pointers

    let s= head;
    let f=head;

    for(let i=0;i<k;i++){   //loop runs becoz the k value is optimized to less than length
        f=f.next;
    }

    while(f.next){
        s=s.next;
        f=f.next;
    }

    //connect last element to head and connect laste element after rotation to null
    f.next =head;
    let newHead = s.next;
    s.next =null;

    return newHead;
};