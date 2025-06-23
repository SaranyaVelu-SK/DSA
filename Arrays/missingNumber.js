// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

function findMissingNumber(arr){
    let n = arr.length;
    let totalSum = (n*(n+1))/2;
    let sum = 0;
    for(let i=0;i<n;i++){
        sum=sum+arr[i]
    }
    return totalSum-sum
}