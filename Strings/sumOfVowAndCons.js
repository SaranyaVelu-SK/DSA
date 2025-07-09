// find the sum of most frequent vowel and consonant in a string

function sumOfVowAndCons(str) {
    let hash = {};
    for (let i = 0; i < str.length; i++) {
        if (!hash[str[i]]) {
            hash[str[i]] = 1;
        } else {
            hash[str[i]]++;
        }
    }

    let maxVowels = 0;
    let maxConsonants = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    let hashKeys = Object.keys(hash);
    for (let j = 0; j < hashKeys.length; j++) {
        if (vowels.includes(hashKeys[i])) {
            maxVowels = Math.max(maxVowels, hash[hashKeys[i]])
        }
        else {
            maxConsonants = Math.max(maxConsonants, hash[hashKeys[i]])
        }
    }
    return maxVowels+maxConsonants;
}