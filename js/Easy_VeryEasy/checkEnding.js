function checkEnding(str1, str2) {
     if(str1.substr(-str2.length) === str2){
       return true;
     } else {
       return false;
     }
    }
    console.log(checkEnding("abc", "bc"));
    console.log(checkEnding("abc", "d"));