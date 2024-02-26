//Return all the palindromes in an array
const words = ["level", "hello", "radar", "world", "deified"];

const getPalindromes = arr => {
    return arr.filter(word => {
        const reversed = word.split('').reverse().join('');
        return word === reversed;
    });
}

console.log(getPalindromes(words)); // Output: ["level", "radar", "deified"]
