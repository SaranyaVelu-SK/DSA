//brute
var maxArea = function(height) {
    let maxArea =0;
    for(let i=0;i<height.length-1;i++){
        for(let j=i+1;j<height.length;j++){
            let length =j-i;
            let breadth = Math.min(height[i],height[j]);
            let area= length*breadth
            maxArea = Math.max(maxArea,area)
        }
    }
    return maxArea;
};


//optimal
var maxArea = function(arr) {
    let maxArea =0;
    let i=0;
    let j= arr.length-1;
    while(i<j){
        let area = (j-i)*Math.min(arr[i],arr[j]);
        maxArea = Math.max(area,maxArea)
        if(arr[i]>arr[j]){
            j--
        }else{
            i++
        }
        
    }
    return maxArea;
};