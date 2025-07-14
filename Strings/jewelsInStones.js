function jewelsinStones(jewels,stones){
    let jSet = new Set();

    for(let i =0;i<jewels.length;i++){
        jSet.add(jewels[i])
    }

    let count = 0;

    for(let x=0;x<stones.length;x++){
        if(jSet.has(stones[x])){
            ++count;
        }
    }
    return count;
}