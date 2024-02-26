//anonymous function  

const numbers = [1, 2, 3, 4, 5];

const sumOfNumbersAnonymous = function(arr) {
    let sum = 0;
    arr.forEach(num => sum += num);
    return sum;
}

console.log(sumOfNumbersAnonymous(numbers)); // Output: 15

// IIFE

const numberss = [1, 2, 3, 4, 5];

const sumOfNumbersIIFE = (function(arr) {
    let sum = 0;
    arr.forEach(num => sum += num);
    return sum;
})(numberss);

console.log(sumOfNumbersIIFE); // Output: 15

