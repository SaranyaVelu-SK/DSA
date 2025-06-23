// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

function moveZeroes(nums) {
    let x = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!== 0){
            nums[x] = nums[i];
            x=x+1;
        }
    }
    for(let k=x;k<nums.length;k++){
        nums[k]=0;
    }
};