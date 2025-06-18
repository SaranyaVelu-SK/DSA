// STAR PATTERNS

const n=6;
for(let i=0;i<n;i++){
    let row ="";
    for(let j=0;j<n;j++){
        row=row+"*"
    }
    console.log(row,i)
}

for(let i=0;i<n;i++){
    let row="";
    for(let j=0;j<i+1;j++){
        row+="*"
    }
    console.log(row,i+1)
}

for(let i=0;i<n;i++){
    let row="";
    for(let j=0;j<i+1;j++){
        row=row+ (j+1)
    }
    console.log(row)
}

for(let i=0;i<n;i++){
    let row="";
    for(let j=0;j<i+1;j++){
        row=row+(i+1)
    }
    console.log(row)
}

for(let i=n;i>0;i--){
    let row="";
    for(let j=1;j<=i;j++){
        row=row+(j)
    }
    console.log(row)
}

for(let i=0;i<n;i++){
    let row="";
    for(let j=1;j<n-i+1;j++){
        row=row+(j)
    }
    console.log(row)
}

for(let i=0;i<n;i++){
    let row="";
    for(let j=1;j<n-i+1;j++){
        row=row+"*"
    }
    console.log(row)
}

for(let i= 1;i<=n;i++){
    let row="";
    for(let j=0;j<n-i;j++){
        row=row+" ";
    }
    for(let z=0;z<i;z++){
        row=row+"*"
    }
    console.log(row)
}


// !!!!BELOW METHOD!!!!
// Pros:
// Very readable.
// Uses index parity (j % 2) to determine the value.

// Cons:
// Less efficient: modulus (%) is a more expensive operation compared to simple variable swap or toggle.
// Not flexible for starting with 0 instead of 1.

for(let i=0;i<n;i++){
    let row="";
    for(let j=0;j<=i;j++){
        if(j%2==0){
            row=row+(1)
        }else{
            row+=(0)
        }
    }
    console.log(row)
}

//ALTERNATE
// More efficient: avoids modulus and instead toggles between 1 and 0 using a simple variable.
// Better performance for larger n.
// More flexible: you can change the starting value to 0 or 1 by just initializing swap.

for(let i=0;i<n;i++){
    let row="";
    let swap = 1;
    for(let j=0;j<=i;j++){
        row=row+swap;
        swap=swap==1?0:1;
    }
   console.log(row)
}


let swap=1;
for(let i=0;i<n;i++){
    let row="";
    for(let j=0;j<=i;j++){
        row=row+swap;
        swap=swap==1?0:1;
    }
   console.log(row)
}



for(let i=0;i<n;i++){
   
    let row="";
    for(let j=0;j<n-i-1;j++){
        row = row+" ";
    }
    for(let z=0;z < (2*i)+1;z++){
        row = row+"*"
    }
    console.log(row)
}


for(let i=0;i<n;i++){
   
    let row="";
    for(let j=0;j<i;j++){
        row = row+" ";
    }
    for(let z=0;z < 2*(n-i)-1;z++){
        row = row+"*"
    }
    console.log(row)
}