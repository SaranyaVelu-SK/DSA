//This problem uses binary search to find a hidden number between 1 and n using a feedback API guess(num), which tells us whether our guess is too high, too low, or correct.
var guessNumber = function(n) {
    let l =1;
    let r = n;
    while(l<=r){
        let m = l+Math.floor((r-l)/2);
        let ans = guess(m);
        if(ans === 0){
            return m;
        }else if(ans <0){
            r=m-1
        }else{
            l=m+1
        }
    }
};