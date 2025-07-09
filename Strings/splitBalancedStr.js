const splitBalancedStr = (str) =>{
    let R = 0;
    let L =0;
    let count =0;
    for(let i =0;i<str.length;i++){
        if(str[i] === 'R'){
            R++;
        }else{
            L++;
        }
        if(R === L){
            count++;
            R =0;
            L=0;
        }
    }
    return count;
}

// without L and R - use this methd when there is a balanced string

const splitBalancedString = (s) =>{
    let temp=0;
    let count =0;
    for(let i =0;i<s.length;i++){
        if(s[i] === "R"){
            temp++;
        }else{
            temp--;
        }
        if(temp === 0 ){
            count++;
        }
    }

    return count;
}