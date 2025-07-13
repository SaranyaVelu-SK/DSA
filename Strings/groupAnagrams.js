// sorting Approach

  var groupAnagrams = function(strs) {
      let map = {};
  
      for (let i = 0; i < strs.length; i++) {
          let sortedStr = strs[i].split("").sort().join(""); 
  
          if (!map[sortedStr]) {
              map[sortedStr] = [strs[i]];
          } else {
              map[sortedStr].push(strs[i]);
          }
      }
  
      return Object.values(map);
  };
      
//hashedKey approach
var groupAnagrams = function(strs) {
    let map={};
    for(let i = 0;i<strs.length;i++){

        let freqArr = Array(26).fill(0);

        for(let j=0;j<strs[i].length;j++){

            let index = strs[i][j].charCodeAt() - 'a'.charCodeAt();
            freqArr[index]++
        }

        let key = "";

        for(let k = 0;k<26;k++){
            key = key + String.fromCharCode(97+k) +freqArr[k];
        }

        if(!map[key]){
            map[key] = [strs[i]]
        }else{
            map[key].push(strs[i])
        }
    }
    return [...Object.values(map)]

    
};