function isPalindrome(str){
    str =str.toLowerCase();
    let filteredStr ="";
    let rev="";

    for(let i = 0;i<str.length;i++){
        if(str[i].match(/[a-z0-9]/i)){
            filteredStr =filteredStr+str[i];
            rev = str[i]+rev;
        }
    }
    return filteredStr === rev;
}

//T.C = O(n) && S.C = O(n)

//Approach2 - two pointers method - S.C => O(1)

function isValidPalindrome(s){
    s=s.toLowerCase();
    let i=0;
    let x=s.length-1;
    while(i<x){
        if(!s[i].match(/[0-9a-z]/i)){
            i++
        }else if(!s[x].match(/[0-9a-z]/i)){
            x--;
        }else if(s[i]=== s[x]){
            i++;x--
        }else{
            return false;
        }
    }
    return true;
}
