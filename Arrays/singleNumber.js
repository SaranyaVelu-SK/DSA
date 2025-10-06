// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.


// brute force
var singleNumber = function(nums) {
    for(let i=0;i<nums.length;i++){
        let num = nums[i];
        let count =0;
        for(let x=0;x<nums.length;x++){
            if(nums[x]==num){
                count++
            }
        }
        if(count ==1){
            return num
        }
    }
};
//better
var singleNumber = function(nums) {
    let hashMap = {};
    for(let i=0;i<nums.length;i++){
        if(!hashMap[nums[i]]){
            hashMap[nums[i]] =1;
        }else{
            hashMap[nums[i]]++;
        }
    }
    for(let key in hashMap){
        if(hashMap[key]==1){
            return Number(key)
        }
    }
};
//optimal
function singleNumber(nums) {
    let xor=0;
    for(let i=0;i<nums.length;i++){
        xor= xor^nums[i]
    }
    return xor;
};