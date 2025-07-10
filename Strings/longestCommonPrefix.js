//find the longest common prefix string shared among an array of strings. If no common prefix exists, the result should be an empty string.

function longestCommonPrefix(arr){
    let x=0;
    while(x<arr[0].length){
        let ch= arr[0][x];
        for(let i=1;i<arr.length;i++){
            if(ch!=arr[i][x] || x == arr[i].length){
                return arr[0].slice(0,x)
            }
        }
        x++;
    }
    return arr[0]
}