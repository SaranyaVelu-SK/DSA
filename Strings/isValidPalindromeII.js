//Given a string s, return true if the s can be palindrome after deleting at most one character from it.

var validPalindrome = function(s) {
    function isPalindrome(l,r){
        while(l<r){
            if(s[l]!==s[r])return false;
            l++;
            r--
        }
        return true;
    }

    let l = 0;
    let r= s.length-1;

    while(l<r){
        if(s[l]!==s[r]){
            return isPalindrome(l+1,r) || isPalindrome(l,r-1);
        }
        l++;
        r--;
    }
    return true;
};