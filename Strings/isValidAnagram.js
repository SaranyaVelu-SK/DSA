function isValidAnagram(s,t){
    if(s.length !== t.length) return false;
    let map ={};
    for(let i=0;i<s.length;i++){
        if(!map[s[i]]){
            map[s[i]] = 1
        }else{
            map[s[i]]++;
        }
    }

    for(let x=0;x<t.length;x++){
        if(!map[t[x]] || map[t[x]] < 0){
            return false
        }else{
            map[t[x]]--
        }
    }
    return true
}