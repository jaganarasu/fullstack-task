//anonymous function  
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const printOddNumbersAnonymous = function(arr) {
    arr.forEach(num => {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
}

printOddNumbersAnonymous(numbers); // Output: 1 3 5 7 9


// IIFE
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

(function(arr) {
    arr.forEach(num => {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
})(numbers1); // Output: 1 3 5 7 9

