//remove duplicates from soretd linked list

function removeDuplicates(head){
    let curr = head;
    while(curr && curr.next){           //v.v important condition -check for curr.next also  -dry run to understand
        if(curr.val === curr.next.val){
            curr.next=curr.next.next;
        }else{
            curr=curr.next
        }
    }
    return head;
}