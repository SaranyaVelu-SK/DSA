function checkForSet(N,i){
    if((N & (1<<i))!==0){
        console.log(true)
    }else{console.log(false)}
}
//using riht shift operator
function checkForSet(N,i){
    if((1 & (N>>i))!==0){
        console.log(true)
    }else{console.log(false)}
}