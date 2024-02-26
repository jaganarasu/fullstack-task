//Rotate an array by k times

//anonymous function 
const array = [1, 2, 3, 4, 5];
const k = 2;

const rotateArrayAnonymous = function(arr, k) {
    const rotated = [...arr.slice(k), ...arr.slice(0, k)];
    return rotated;
}

console.log(rotateArrayAnonymous(array, k)); // Output: [3, 4, 5, 1, 2]


// IIFE
const arrays = [1, 2, 3, 4, 5];
const k1 = 2;

const rotatedArrayIIFE = (function(arr, k) {
    const rotated = [...arr.slice(k), ...arr.slice(0, k)];
    return rotated;
})(arrays, k1);

console.log(rotatedArrayIIFE); // Output: [3, 4, 5, 1, 2]
