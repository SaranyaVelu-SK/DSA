var minBitFlips = function(start, goal) {
    
    let ans = start^goal;
    let count =0;
    while(ans!==0){
        ans = ans & (ans-1);
        count++;
    }
    return count;
};