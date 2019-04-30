function triArea(base, height) {
  return (base * height) / 2;
}
console.log(triArea(3, 2)); //3


function concat(arr1, arr2) {
  return arr1.concat(arr2);
}
console.log(concat([1, 3, 5], [2, 6, 8])); // [1, 3, 5, 2, 6, 8]


function divisibleByFive(n) {
  return n % 5 === 0 ? true : false;
}
console.log(divisibleByFive(5)); //true
console.log(divisibleByFive(37)); //false

function isEmpty(s) {
  return !s || s === null;
}
console.log(isEmpty('')); //true
console.log(isEmpty(' ')); //false

function animals(chickens, cows, pigs) {
  return chickens * 2 + cows * 4 + pigs * 4;
}
console.log(animals(2, 3, 5)); //36

// solution 1
function differenceMaxMin(arr) {
  // solution with spread syntax
  return Math.max(...arr) - Math.min(...arr);
};
console.log(differenceMaxMin([10, 4, 1, 4, -10, -50, 32, 21])); //82

// solution 2
function differenceMaxMin2(arr) {
  let sortedArr = arr.sort((a, b) => a - b);
  return sortedArr[sortedArr.length - 1] - sortedArr[0];
};
console.log(differenceMaxMin2([10, 4, 1, 4, -10, -50, 32, 21])); //82

function nextElement(arr) {
  let difference = arr[arr.length - 1] - arr[arr.length - 2];

  return arr[arr.length - 1] + difference;
}
console.log(nextElement([3, 5, 7, 9])); // 11

function smallerNum(n1, n2) {
  let num1 = parseInt(n1)
  let num2 = parseInt(n2)
  return Math.min(num1, num2).toString();
}
console.log(smallerNum("21", "44")); //21


function additiveInverse(arr) {
  return arr.map(num => num > 0 ? -Math.abs(num) : Math.abs(num));
}
console.log(additiveInverse([5, -7, 8, 3])); //[-5, 7, -8, -3]


function isIdentical(s) {
  return s.split('').every((char) => char === s[0]);

}
console.log(isIdentical("aaaaaa")); // true
console.log(isIdentical("aabaaa")); // false

function smallerNum(n1, n2) {
  return parseInt(n1) <= parseInt(n2) ? n1 : n2;
}
console.log(smallerNum("21", "44"));
console.log(smallerNum("21", "4"));


function toArray(str) {
  if (str === '') return [];
  let arr = str.split(', ');
  return arr;

}
console.log(toArray("watermelon, raspberry, orange"));
console.log(toArray("x1, x2, x3, x4, x5"));
console.log(toArray(""));

