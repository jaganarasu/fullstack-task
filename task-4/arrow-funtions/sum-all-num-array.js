//Sum of all numbers in an array


const numbers = [1, 2, 3, 4, 5];

const sumOfNumbers = arr => {
    return arr.reduce((sum, num) => sum + num, 0);
}

console.log(sumOfNumbers(numbers)); // Output: 15
