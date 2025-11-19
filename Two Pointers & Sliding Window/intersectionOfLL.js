// two pointer method
var getIntersectionNode = function(headA, headB) {
    let pA=headA;
    let pB=headB;
    while(pA!==pB){
        pA= pA==null ? headB : pA.next;
        pB= pB==null ? headA : pB.next;
    }
    return pA
};
//
var getIntersectionNode = function(headA, headB) {
    //length of A and B
    let m =0;
    let pA = headA;
    while(pA){
        m++;
        pA=pA.next;
    }
    let n =0;
    let pB = headB;
    while(pB){
        n++;
        pB=pB.next;
    }

    //difference of length

    let diff = Math.abs(m-n)

    //keep 1st as small and 2nd as large
    if(m>n){
        let temp = headA;
        headA=headB;
        headB=temp
    }
    pA=headA;
    pB=headB;
    for(let i=0;i<diff;i++){
       pB=pB.next;
    }
    while(pA!==pB){
        pA=pA.next;
        pB=pB.next;
    }
    return pA;
};