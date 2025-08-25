var findMin = function(arr) {
    let l=0;
    let r= arr.length-1;
    while(l<=r){
        if(arr[l]<=arr[r]) return arr[l];
        let m = l+Math.floor((r-l)/2);
        if(arr[m]<arr[m-1]){
            return arr[m]
        }
        if(arr[m]<arr[l]){
            r=m-1
        }else{
            l=m+1
        }
    }
};