function isAvgWhole(arr) {
    let sum = arr.reduce((acc, num) => acc + num)
    return Number.isInteger(sum/arr.length) ? true : false;
  }
  console.log(isAvgWhole([1, 3]));//true
  console.log(isAvgWhole([1, 2, 3, 4]));//false

  module.exports = isAvgWhole;