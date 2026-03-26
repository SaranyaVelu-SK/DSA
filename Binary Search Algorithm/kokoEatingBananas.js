//linear search -  TIme Exceeding Error =O(n*max[piles])
var minEatingSpeed = function (piles, h) {
    function maxOfPiles(pile) {
        let max = pile[0];
        for (let i = 1; i < pile.length; i++) {
            if (pile[i] > max) {
                max = pile[i]
            }
        }
        return max;
    }
    function totalTime(pile, hr) {
        let reqTime = 0;
        for (let i = 0; i < pile.length; i++) {
            reqTime += Math.ceil(pile[i] / hr)
        }
        return reqTime;
    }
    let maxVal = maxOfPiles(piles);

    for (let i = 1; i <= maxVal; i++) {
        let timeReq = totalTime(piles, i);
        console.log(timeReq)
        if (timeReq <= h) {
            return i;
        }
    }
    return -1;
};

//Binary Search - O(n * log(max[piles]))
var minEatingSpeed = function (piles, h) {
    function maxOfPiles(pile) {
        let max = pile[0];
        for (let i = 1; i < pile.length; i++) {
            if (pile[i] > max) {
                max = pile[i]
            }
        }
        return max;
    }
    function totalTime(pile, hr) {
        let reqTime = 0;
        for (let i = 0; i < pile.length; i++) {
            reqTime += Math.ceil(pile[i] / hr)
        }
        return reqTime;
    }
    let maxVal = maxOfPiles(piles);

    let l = 1;
    let r = maxVal;
    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);
        let timeReq = totalTime(piles, m);
        if (timeReq <= h) {
            r = m - 1
        } else {
            l = m + 1
        }
    }
    return l;
};