//Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

//You must write an algorithm with O(log n) runtime complexity.

var search = function(arr, target) {
 let l = 0;
 let r =  arr.length-1;
 while(l<=r){
    let m = l+Math.floor((r-l)/2);
    if(target === arr[m]){
        return m;
    }
    if(arr[m]>=arr[l]){
        if(target<arr[m] && target >= arr[l]){
            r=m-1
        }else{
            l=m+1;
        }
    }else{
        if(target>arr[m] && target<=arr[r]){
            l=m+1
        }else{
            r=m-1
        }
    }
 }
 return -1;
};