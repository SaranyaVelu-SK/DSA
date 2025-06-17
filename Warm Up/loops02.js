// write a function that searches for an element in an array and returns the index, if the element is not present then just return -1.

function searchElement(arr, num){
    for (let i=0;i<arr.length;i++){
        if(arr[i] == num){
            return i;
        }
    }
    return -1;
}

//Write a function that returns the count of negative numbers in an array.

function countNegatives(arr){
    let count = 0 ;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<0){
            count ++
        }
    }
    return count;
}

// write a function that returns the largest number in an array.

function findLargest(arr) {
    let largest = arr[0];
    for (let i=1;i<arr.length;i++){
        if(arr[i] > largest){
            largest = arr[i]
        }
    }
    return largest;
}

// write a function that returns the smallest number in an array.

function findSmallest(arr){
    let smallest = Infinity;
    for(let j=0;j<arr.length;j++){
        if(arr[j]<smallest){
            smallest = arr[j]
        }
    }
    return smallest;
}