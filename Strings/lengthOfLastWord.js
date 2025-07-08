// Two Loop approach

function lengthOfLastWord(str){
    //find index of last element
    let n = str.length - 1;
    //trim all trailing spaces if present
    while(n>=0){
        if(str[n] !== " ") break;
        n--;
    }
    let count =0;
    while(n>=0){
        if(str[n] === " ") break;
        count++;
        n--
    }

    return count;
}

//one loop approach

function lengthOfLastWord2(str){
    let n = str.length -1;

    let count = 0;
    while(n>=0){

        if(str[n] !==" "){
            count++
        }else if(count > 0){
            break;
        }
        n--;
    }
    return count;
}