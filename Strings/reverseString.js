

// js handles undefined here

var reverseStr = function(s, k) {
    s = s.split("");

    for(let i = 0; i<s.length;i=i+(2*k)){
        let n = Math.min(k, s.length - x)  //v.v impt check
        let mid = Math.floor(n/2);
        for(let j = 0;j<mid;j++){
            let temp = s[i+j];
            s[i+j] = s[i+k-1-j];
            s[i+k-1-j] = temp;
        }
    }
    return s.join("");
};

// no bother about index exceeding than string's length

var reverseStr = function(s, k) {
    s = s.split("");

    for(let i = 0; i<s.length;i=i+(2*k)){
        let left = i;
        let right = Math.min(i+k-1,s.length-1);
        while(left<right){
            let temp=s[left];
            s[left] = s[right];
            s[right]= temp;
            left++;
            right--;
        }
    }
    return s.join("");
};