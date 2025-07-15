function selectionSort(arr){
    for(let i = 0;i<arr.length-1;i++){
        let min = i;
        for(let x = i+1;x<arr.length;x++){
            if(arr[x]<arr[min]){
                min = x;
            }
        }
        if(min!==i){
            let temp = arr[min];
            arr[min] = arr[i];
            arr[i]=temp
        }
    }
    return arr;
}