// naive solution
function twoSum(nums, target) {
    //let indices = [];
    //console.log(sum);
    for (let i = 0; i < nums.length; i++) {
      for (let j = i+1; j < nums.length; j++) {
        if (i !== j) {
          if (nums[i] + nums[j] === target) {
            return Array.of(i, j);
           // return indices
          }
        }
      }
    }
  }
  console.log(twoSum([2, 7, 11, 15], 9));// [0,1]
  console.log(twoSum([3, 2, 3], 6));//[0,2]
  console.log(twoSum([2, 5, 5, 11], 10)); //[1,2]
  
  module.exports = twoSum;