// An Armstrong number (also known as a narcissistic number) is a number that is equal to the sum of its own digits each raised to the power of the number of digits.

// You are given an integer num.
// Write a function to check whether the number is an Armstrong number or not.

function isArmstrong (num){
    let n=num;
    let count =0;
    while(n>0){
        n = Math.floor(n/10);
        count++
    }

    let sum = 0;
    let arm = num;
    while (arm > 0){
        let rem = arm % 10;
        let pwr = Math.pow(rem,count);
        sum = sum+pwr;
        arm = Math.floor(arm/10)
    }

    return num === sum ;
}