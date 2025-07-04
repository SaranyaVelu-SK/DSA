function intersectionNode(headA, headB){
    let store = new Set();
    while(headA){
        store.add(headA);
        headA=headA.next;
    };
    while(headB){
        if(store.has(headB)){
            return headB
        }
        headB = headB.next;
    }
    return null;
}