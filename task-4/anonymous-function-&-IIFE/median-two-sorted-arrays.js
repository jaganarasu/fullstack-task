//Return median of two sorted arrays of the same size.
//anonymous function  
const array1 = [1, 3, 5];
const array2 = [2, 4, 6];

const findMedianAnonymous = function(arr1, arr2) {
    const merged = [...arr1, ...arr2].sort((a, b) => a - b);
    const length = merged.length;
    const mid = Math.floor(length / 2);
    if (length % 2 === 0) {
        return (merged[mid - 1] + merged[mid]) / 2;
    } else {
        return merged[mid];
    }
}

console.log(findMedianAnonymous(array1, array2)); // Output: 3.5


// IIFE
const array11 = [1, 3, 5];
const array22 = [2, 4, 6];

const medianIIFE = (function(arr1, arr2) {
    const merged = [...arr1, ...arr2].sort((a, b) => a - b);
    const length = merged.length;
    const mid = Math.floor(length / 2);
    if (length % 2 === 0) {
        return (merged[mid - 1] + merged[mid]) / 2;
    } else {
        return merged[mid];
    }
})(array11, array22);

console.log(medianIIFE); // Output: 3.5
