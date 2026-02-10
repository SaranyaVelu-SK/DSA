var subsets = function(nums) {
    let subsets = 1<<nums.length;
    let ans =[];
    for(let i = 0;i<subsets.length;i++){
        let list =[];
        for(let j=0;j<nums.length-1;j++){
            if(i & (1<<j)){
                list.push(nums[j])
            }
        }
        ans.push(list)
    }
    return ans
};