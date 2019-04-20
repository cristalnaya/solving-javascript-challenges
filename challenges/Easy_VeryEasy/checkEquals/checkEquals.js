function checkEquals(arr1, arr2) {

    return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index])
}

console.log(checkEquals([1, 2], [1, 3])); //false
console.log(checkEquals([1, 2], [1, 2])); //true
console.log(checkEquals([1, 1, 1, 2, 1, 3, 1, 4, 1, 5, 1, 6, 1, 7], [11, 12, 13, 14, 15, 16, 17])); //false

module.exports = checkEquals;