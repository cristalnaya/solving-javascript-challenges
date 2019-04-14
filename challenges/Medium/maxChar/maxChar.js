function maxChar(str){
    let chars = {};
    let max = 0;
    let maxChar = '';
    let newStr = str.replace(/!+$/, '');
  
    for(let char of newStr){
     if(!chars[char]){
       chars[char] = 1;
  
     } else {
       chars[char]++;
     }
       //chars[char] = chars[char] + 1 || 1;
    }
   // return chars;
  for(let char in chars){
    if(chars[char] > max){
      max = chars[char];
    
      maxChar = char;      
    }
  }
  
  return maxChar;  
  }
  console.log(maxChar('Hello World!!!!'));

  module.exports = maxChar;