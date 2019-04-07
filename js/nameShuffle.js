function nameShuffle(str) {
      return str.split(' ').reverse().join(' ');
    }
    
    console.log(nameShuffle("Donald Trump"));
    
    function checkPalindrome(str) {
      let reverse = str.split('').reverse().join('');
    	if(str === reverse){
        return true;
      }
      return false;
    }
    
    console.log(checkPalindrome("mom"));
    console.log(checkPalindrome("scary"));