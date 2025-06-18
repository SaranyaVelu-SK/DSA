function findSecondLargest(arr){
    let largest = -Infinity;
    let secondLargest = -Infinity;

    if(arr.length <2){
        return "Array should contain atleast two numbers"
    }

    for (let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            secondLargest = largest;
            largest = arr[i];
        }else if(arr[i] >secondLargest && arr[i] !== largest){
            secondLargest = arr[i]
        }
    }
    return secondLargest;

}

