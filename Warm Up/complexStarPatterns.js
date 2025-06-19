// 1        1
// 12      21
// 123    321
// 1234  4321
// 1234554321

// here, for spaces, k is calculated everytime - will be expensive in case of large range
// instead make the code as
// let space =2*(n-1)
// and loop it from k=i; k<spaces

const n=5;

for(let i=0;i<n;i++){
    let row="";
    for(let j=0;j<i+1;j++){
        row=row+(j+1);
    }
    for(let k=0;k<2*(n-i-1);k++){ // better code suggestion above
        row=row+" ";
    }
    for(let l = i;l>=0;l--){
        row=row+(l+1)
    }
    console.log(row)
}


    // 1 
    // 2 3 
    // 4 5 6 
    // 7 8 9 10 
    // 11 12 13 14 15 

let num = 1;
for(let i=0;i<n;i++){
    let row="";
    for(let j=0; j<=i;j++){
        row=row+(num)+" ";
        num++;
    }
    
    console.log(row)
}
