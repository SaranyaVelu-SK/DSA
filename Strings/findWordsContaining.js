function findWordsContaining(words,x){
    let ansArr = [];
    for(let i=0;i<words.length;i++){
        let n = words[i].length -1;
        while(n >= 0){
            if(words[i][n] === x){
                ansArr.push(i);
                break;
            }
            n--;
        }
    }
    return ansArr;
}