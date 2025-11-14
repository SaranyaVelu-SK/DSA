// optimal #1
var twoSum = function(nums, target) {
    let map = {};
    for(let i=0;i<nums.length;i++){
        map[nums[i]] = i;
    }
    for(let x =0; x<nums.length;x++){
        let rem = target-nums[x];
        if(rem in map && map[rem] !== x ){
            return [x,map[rem]]
        }
    }
};

// optimal #2

var twoSum = function(nums, target) {
    let hashMap = {};

    for(let i=0;i<nums.length;i++){
        let x = target - nums[i];
        if(x in hashMap){
            return [hashMap[x],i]
        }
        hashMap[nums[i]] = i
    }
};
//brute force
var twoSum = function(nums, target) {
    for(let i=0;i<nums.length-1;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+ nums[j] == target){
                return [i,j];
            }
        }
    }
};