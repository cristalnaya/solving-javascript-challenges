function isPalindrome(n) {
    let reverse = parseInt(n.toString().split('').reverse().join(''));
    parseInt(reverse);
   
    return n === reverse ? true : false;
  }
  console.log(isPalindrome(838));//true
  console.log(isPalindrome(4433));//false

  module.exports = isPalindrome;