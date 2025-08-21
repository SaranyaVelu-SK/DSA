var mySqrt = function(x) {
    if(x<2)return x;
    
        let l=2;
        let r = Math.floor(x/2);
        let m;
        while(l<=r){
            m = Math.floor((l+r)/2);
            if(m**2 > x){
                r = m-1;
            }else if(m**2 < x){
                l = m+1;
            }else{
                return m;
            }
        }
        return r;
};