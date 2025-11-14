var isSubsequence = function(s, t) {
    let i=0;
    let x=0;
    while(x<s.length){
        if(i<t.length){
            if(t[i]==s[x]){
                x++;
                i++;
            }else{
                i++;
            }
        }else{
            return false
        }
    }
    return true
};