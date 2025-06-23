// Given a binary array nums, return the maximum number of consecutive 1's in the array.

function maxConsecutiveOnes(arr){
    let count =0;
    let maxOnes=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]==1){
            count++;
        }else{
            maxOnes = Math.max(count,maxOnes);
            count=0;
        }
    }
    return Math.max(count,maxOnes)
}