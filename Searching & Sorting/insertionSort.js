function insertionSort(arr){
    for(let i =1;i<arr.length;i++){
        let curr = arr[i];
        let prevIndex = i-1;

        while(arr[prevIndex] > curr  && prevIndex >=0){
            arr[prevIndex+1] = arr[prevIndex];
            prevIndex--;
        }

        arr[prevIndex+1] = curr;
    }
    return arr
}