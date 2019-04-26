const isPalindrome = require('./isPalindrome');

test('is it the number a palindrome', () => {
    expect(isPalindrome(838)).toBe(true);
    expect(isPalindrome(4433)).toBe(false);
});