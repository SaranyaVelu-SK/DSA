// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.


//brute force
var missingNumber = function(nums) {
    let n = nums.length;
   for(let i=0;i<=n;i++){
    let flag =0;
    for(let x=0;x<n;x++){
        if(nums[x]==i){
            flag = 1;
            break;
        }
    }
    if(flag==0){
        return i
    }
   }
};
//better
var missingNumber = function(nums) {
    let n = nums.length;
   let arr = new Array(n+1).fill(0);

   for(let i=0;i<n;i++){
    arr[nums[i]]=1
   }
   for(let x=0;x<=n;x++){
    if(arr[x]==0){
        return x;
    }
   }
};
//optimal
function findMissingNumber(arr){
    let n = arr.length;
    let totalSum = (n*(n+1))/2;
    let sum = 0;
    for(let i=0;i<n;i++){
        sum=sum+arr[i]
    }
    return totalSum-sum
}

var missingNumber = function(nums) {
    let n=nums.length
let x1=0;
let x2=0;

for(let i=0;i<n;i++){
    x1 = x1^ nums[i];
    x2 = x2 ^ (i+1);
}

return x1^x2
};