// Question: Reverse Integer with Overflow Check
// Write a function reverse(x) that takes a 32-bit signed integer and returns its digits reversed. If the reversed value overflows the 32-bit signed integer range, return 0.

// Requirements
// Reverse the digits of a 32-bit signed integer.
// Return 0 if the result overflows.

// Constraints
// Time Complexity: O(d) where d is the number of digits.
// Space Complexity: O(1) — constant space.

function reverseDigits(num){
    let n = Math.abs(num);

    let rev=0;

    while(n>0){
        let rem = n%10;
        rev = (rev*10) +rem;
        n=Math.floor(n/10);
    }

    let limit = Math.pow(2,31);         //setting limit, so that rev doesnot overflow 32-bit signed integer range
    if (rev < -limit || rev > limit-1) return 0;
    if (num<0) { return -rev}
    else{
        return rev
    };
}