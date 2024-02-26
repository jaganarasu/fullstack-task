
//anonymous function  
const strings = ["hello", "world", "javascript"];

const titleCapsAnonymous = function(arr) {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
}

console.log(titleCapsAnonymous(strings)); // Output: ["Hello", "World", "Javascript"]



// IIFE
const stringss = ["hello", "world", "javascript"];

const titleCapsIIFE = (function(arr) {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
})(stringss);

console.log(titleCapsIIFE); // Output: ["Hello", "World", "Javascript"]