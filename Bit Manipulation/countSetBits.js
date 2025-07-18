function countBits(n){
    let count = 0;
    while(n>1){
        if(n%2 === 1){count++};
        n=Math.floor(n/2)
    }
    if(n==1) count++;

    console.log(count)
}

//improvised method

function countBitss(n){
    let count = 0;
    while(n>1){
        count += n&1;
        n=n>>1
    }
    if(n==1)count++;
    console.log(count)
}