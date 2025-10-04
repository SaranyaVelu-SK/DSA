function leftShift(nums,k){
    let n= nums.length;
    k=k%n;
    let temp=[];
    for(let i =0;i<k;i++){
        temp[i] = nums[i]
    }
    for(let i=k;i<n;i++){
        nums[i-k]=nums[i]
    }
    for(let i=n-k;i<n;i++){
        nums[i] = temp[i-(n-k)]
    }
}