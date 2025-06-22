// Write a function that reverses a string. The input string is given as an array of characters s. You must do this by modifying the input array in-place with O(1) extra memory.
function reverseString (s) {
    let n = s.length;
    let halfN = Math.floor(n / 2);

    for (let i = 0; i < halfN; i++) {
        let temp = s[i];
        s[i] = s[n - i - 1];
        s[n - i - 1] = temp;
    }
};

//using array destructing in js
function reverseString(s) {
    let left = 0, right = s.length - 1;
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
}