//Convert to binary
let n = 6;
let convertNToBinary = n.toString(2); // 101011
console.log(convertNToBinary);
// split with 0, so this removes 0 and receive only 1
let splitResult = convertNToBinary.split('0'); //['1', '1', '11']

let sort = splitResult.sort((a,b) => b.length - a.length); //['11', '1', '1']

// receive the longest sequence of 1's
let longestSequence = sort[0].length; //1


// oneliner
function findLongestOne(n){
  return n.toString(2).split(0).sort((a, b) => b - a)[0].length;
}

console.log(findLongestOne(6));