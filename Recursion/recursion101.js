// print n to 1 using recursion

function print(n){
    if(n<1) return ;
    console.log(n);
    n=n-1;
    print(n)
}
print(5);

//print 1 to n using recursion;

let n = 5;
function printN(x){
    if(x>n) return;
    console.log(x);
    x++;
    printN(x)
}
printN(1);