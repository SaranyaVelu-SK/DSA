// brute #1
var strStr = function(haystack, needle) {
    const hl = haystack.length;
    const nl = needle.length;
    for(let i=0;i<hl-nl+1;i++){
        let x=i; let y=0;
        let isOcc = true
        while(y<nl){
            if(haystack[x] == needle[y]){
                x++;
                y++
            }else{
                isOcc =false;
                break;
            }
        }
        if(isOcc) return i;
    }
    return -1
};

// brute #2
var strStr = function(haystack, needle) {
    let hl= haystack.length;
    let nl = needle.length;
    for(let i=0;i<=hl-nl;i++){
        let j=0;
        for(j=0;j<nl;j++){
            if(haystack[i+j] !== needle[j]){
                break;
            }
        }
        if(j===nl)return i;
    }
    return -1;
};