function clearBit(N,i){
    const cleared = N & (~(1<<i));
    console.log(cleared)
}