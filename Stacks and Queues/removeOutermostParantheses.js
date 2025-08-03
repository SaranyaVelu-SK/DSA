//using stack
var removeOuterParentheses = function(s) {
    let stack=[];
    let ans="";
    for(let i=0;i<s.length;i++){
        if(s[i]==='('){
            stack.push(s[i]);
            ans+= stack.length>1 ?s[i]:"";
        }else{
            ans+= stack.length>1 ?s[i]:"";
            stack.pop()
        }
    }
    return ans;
};

//without stack
var removeOuterParentheses = function(s) {
    let count=0
    let ans="";
    for(let i=0;i<s.length;i++){
        if(s[i]==='('){
            count++
            ans+= count>1 ?s[i]:"";
        }else{
            ans+= count>1 ?s[i]:"";
            count--
        }
    }
    return ans;
};