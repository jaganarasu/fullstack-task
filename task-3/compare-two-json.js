// compare two json

let obj1 = '{"name": "person1", "age": 5}';
let obj2 = '{"age": 5, "name": "person1"}';

function areEqualJSON(json1, json2) {
    const obj1 = JSON.parse(json1);
    const obj2 = JSON.parse(json2);

    const keys1 = Object.keys(obj1).sort();
    const keys2 = Object.keys(obj2).sort();

    if (keys1.length !== keys2.length) {
        return false;
    }

    return keys1.every(key => obj1[key] === obj2[key]);
}

console.log(areEqualJSON(obj1, obj2)); // Output: true