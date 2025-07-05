function add2Numbers(l1,l2){
    let ans = new ListNode();
    let final = ans;

    let carry =0;
    while(l1 || l2 || carry){
        let val1 = l1 ? l1.val :0;
        let val2 = l2?l2.val :0;

        let sum = val1+val2+carry;
        carry = Math.floor(sum/10);
        let x = sum%10;

        let newNode = new ListNode(x);
        ans.next = newNode;
        ans = ans.next;
        l1 = l1 && l1.val;
        l2 = l2 && l2.val;

    }
    return final.next;
}