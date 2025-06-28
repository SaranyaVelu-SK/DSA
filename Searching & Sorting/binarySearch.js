const binarySearch = (arr, target) =>{
    let l=0;
    let r = arr.length - 1;
    while(r>=l){
        let m = Math.floor((r+l)/2);
        if(arr[m] ===target){
            return m;
        }
        if(target > arr[m]){
            l=m+1;
        }else{
            r=m-1;
        }
    }
    return -1;
}