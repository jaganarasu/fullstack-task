//Convert all the strings to title caps in a string array

const convertToTitleCaps = (arr) => {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
}

// Example usage:
const strings = ["hello", "world", "javascript"];
console.log(convertToTitleCaps(strings)); // Output: ["Hello", "World", "Javascript"]
