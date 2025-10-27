//brute force
var detectCycle = function(head) {
    if(!head || !head.next) return null;
    let nodeSet = new Set();
    let temp =head;
    while(temp){
        if(!nodeSet.has(temp)){
            nodeSet.add(temp)
        }else{
            return temp
        }
        temp = temp.next
    }
    return null
};

//optimal
var detectCycle = function(head) {
 if(!head || !head.next) return null;
 let slow=head;
 let fast = head;
 while(fast && fast.next){
    slow=slow.next;
    fast = fast.next.next
    if(slow==fast){
        slow=head;
        while(slow!==fast){
            slow=slow.next;
            fast=fast.next;
        }
        return slow
    }
 }
 return null;
};