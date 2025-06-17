function isEligibleToVote(age){
    if(age <0){
        console.log("Invalid Age")
    }else if(age<18){
        console.log("Not Eligible to vote")
    }else{
        console.log("Eligible to vote")
    }
}


function isOddorEven(num){
    if(num%2 == 0){
        console.log("The given number is even")
    }else{
        console.log("The given number is odd")
    }
}
isEligibleToVote(-5);