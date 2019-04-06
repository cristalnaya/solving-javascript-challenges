function findLargestNum(arr) {
  let sort = arr.sort((a,b) => b - a);
  return sort[0];
}

console.log(findLargestNum([4,5,1,3])); //5