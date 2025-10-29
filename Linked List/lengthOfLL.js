//brute
function lengthOfLL(head){
    if(!head ||!head.next) return 0;
    let nodeSet = new Set();
    let temp = head;
    let count = 0;
    while(temp){
        if(nodeSet.has(temp)){
            count =1;
            let start =temp;
            temp=temp.next;
            while(start!==temp){
                count++;
                temp=temp.next;
            }
            return count;
        }
        nodeSet.add(temp);
        temp=temp.next;

    }
    return 0;
}

//optimal - floyd's / tortoise or hare method

function lengthOfLL(head){
    if(!head||!head.next){return 0}
    let slow=head;
    let fast=head;
    let count=0;
    while(fast && fast.next){
        slow=slow.next;
        fast =fast.next.next;
        if(slow==fast){
            count =1;
            fast=fast.next;
            while(fast!==slow){
                count++;
                fast =fast.next;
            }
            return count
        }
    }
    return 0;
}