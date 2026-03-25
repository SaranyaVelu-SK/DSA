var findPeakElement = function(nums) {
    let n=nums.length;
    if(n==1 || nums[0]>nums[1]) return 0;
    if(nums[n-1]>nums[n-2]) return n-1;
    let l=1;
    let r=n-2;
    while(l<r){
        let m = l+Math.floor((r-l)/2);
        if(nums[m]<nums[m+1]){
            l=m+1;
        }else{
            r=m;
        }
    }
    return l;
};

// linear search
var findPeakElement = function(nums) {
    if(nums.length==1 || nums[0]>nums[1]) return 0;
    if(nums[nums.length-1]>nums[nums.length-2]) return nums.length-1;
    for(let i=1;i<nums.length-1;i++){
        if(nums[i]>nums[i-1]  && nums[i]>nums[i+1]){
            return i;
        }
    }

};