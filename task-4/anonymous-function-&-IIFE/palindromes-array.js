//Return all the palindromes in an array
//anonymous function  
const words = ["level", "hello", "radar", "world", "deified"];

const findPalindromesAnonymous = function(arr) {
    return arr.filter(word => {
        const reversed = word.split('').reverse().join('');
        return word === reversed;
    });
}

console.log(findPalindromesAnonymous(words)); // Output: ["level", "radar", "deified"]

// IIFE
const wordsa = ["level", "hello", "radar", "world", "deified"];

const palindromesIIFE = (function(arr) {
    return arr.filter(word => {
        const reversed = word.split('').reverse().join('');
        return word === reversed;
    });
})(wordsa);

console.log(palindromesIIFE); // Output: ["level", "radar", "deified"]
