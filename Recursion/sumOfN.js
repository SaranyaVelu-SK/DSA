// sum of first n numbers
// const n=5;
function sum(n){
    if(n==0)return 0;
    return n+sum(n-1);
}

//sum of all elements in an array

const arr = [3,2,4,5,6,9]
let n = arr.length;

function sumOfarray(n){
    if(n==0) return arr[0];
    return arr[n] + sumOfarray(n-1);
}

//sum of all odd numbers in an array

const arr1 = [2,4,7,11,8,8,4,2,1,5,7,9];

function sumOfOdd(arr,n){
    let isOdd = ((arr[n] % 2) !== 0);
    let x = isOdd ? arr[n] : 0;

    if(n == 0){
        return x;
    }
    return (x + sumOfOdd(arr, n-1));
}

console.log(sumOfOdd(arr1, (arr1.length - 1 )));