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

//brute
var oddEvenList = function(head) {
    if(!head || !head.next) return head;
    let arr=[];

    let temp =head;
    while(temp && temp.next){
        arr.push(temp.val);
        temp=temp.next.next;
    }
    if(temp){arr.push(temp.val)};

    temp =head.next;
    while(temp && temp.next){
        arr.push(temp.val);
        temp=temp.next.next;
    }
    if(temp){arr.push(temp.val)};

    let i=0;
    temp=head;
    while(temp){
        temp.val = arr[i];
        i++;
        temp=temp.next
    }
    return head;
};