var rotate = function(nums, k) {
    let n=nums.length;
    k=k%n;

    let temp =[];
    for(let i=n-k;i<n;i++){
        temp[i-(n-k)] = nums[i]
    }

    for(let x=n-1;x>=k;x--){
        nums[x] = nums[x-k]
    }

    for(let a =0;a<k;a++){
        nums[a] =temp[a]
    }
};