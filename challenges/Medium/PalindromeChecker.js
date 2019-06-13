// FCC Challenge
function palindrome(str) {
  // Good luck!
  str = str.toLowerCase().replace(/[\W_]/g, '');
  
  console.log(str);
  return str === str.split('').reverse().join('') ? true : false;
}

console.log(palindrome("eye"));
console.log(palindrome("racecar"));
console.log(palindrome("race CAR"));
console.log(palindrome("_eye"));//true
console.log(palindrome("not a palindrome"));//false