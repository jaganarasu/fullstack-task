//Return all the prime numbers in an array
//anonymous function  
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const findPrimeNumbersAnonymous = function(arr) {
    return arr.filter(num => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
}

console.log(findPrimeNumbersAnonymous(numbers)); // Output: [2, 3, 5, 7]


// IIFE

const numberss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const primeNumbersIIFE = (function(arr) {
    return arr.filter(num => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
})(numberss);

console.log(primeNumbersIIFE); // Output: [2, 3, 5, 7]
