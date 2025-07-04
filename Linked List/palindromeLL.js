// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

function isPalindromeLL (head){
    let slow = head;
    let fast = head;
    while(fast && fast.next){
        slow=slow.next;
        fast=fast.next.next;        
    }

    let prev=null;
    while(slow){
        let temp = slow.next;
        slow.next =prev;
        prev = slow;
        slow = temp;
    }

    let first = head;
    let second = prev;
    while(second){  //choosing second makes some sense - dry run all cases to find it
        if(first.val !== second.val) return false;
        first = first.next;
        second=second.next;
    }
    return true;
}