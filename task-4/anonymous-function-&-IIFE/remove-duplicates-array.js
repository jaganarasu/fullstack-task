//remove duplicates from an array


//anonymous function  
const numbers = [1, 2, 3, 4, 2, 5, 6, 1];

const removeDuplicatesAnonymous = function(arr) {
    return arr.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });
}

console.log(removeDuplicatesAnonymous(numbers)); // Output: [1, 2, 3, 4, 5, 6]



// IIFE
const numberss = [1, 2, 3, 4, 2, 5, 6, 1];

const uniqueNumbersIIFE = (function(arr) {
    return arr.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });
})(numberss);

console.log(uniqueNumbersIIFE); // Output: [1, 2, 3, 4, 5, 6]
