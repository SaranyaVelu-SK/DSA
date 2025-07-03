//hash table or set method

function hasCycle(head){
    let checkSet = new Set();
    let curr = head;
    while(curr){
        if(checkSet.has(curr)){
            return true
        }
        checkSet.add(curr);
        curr = curr.next;
    }
    return false;
}

//floyd's cycle detection algorithm

function isCycle(head){
    if(!head || !head.next) return false;
    let slow = head;
    let fast = head.next;

    while(fast && fast.next){
        if(slow === fast){
            return true;
        }
        slow=slow.next;
        fast=fast.next.next;
    }
    return false;
}