// Write a function isPalindrome(x) that takes an integer x and returns true if it reads the same backward and forward; otherwise false.

// Requirements
// Handles both positive and negative integers.
// Returns false for negative numbers (not palindromes).

// Constraints
// Time Complexity: O(d) where d is the number of digits.
// Space Complexity: O(1) — Only a few variables are used.

function isPalindrome(n){
    if(n <0 ) return false;
    let num=n;
    let rev =0;
    while(num>0){
        let rem = num%10;
        rev= rev*10 +rem;
        num=Math.floor(num/10)
    }

    return n === rev;
}