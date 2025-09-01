//You are given an integer mountain array arr of length n where the values increase to a peak element and then decrease. Return the index of the peak element. Your task is to solve it in O(log(n)) time complexity.

var peakIndexInMountainArray = function(arr) {
    let l=0;
    let r= arr.length-1;
    while(l<r){
        let m= l+Math.floor((r-l)/2);
        if(arr[m]<arr[m+1]){
            l=m+1;
        }else{
            r=m;
        }
    }
    return l;
};