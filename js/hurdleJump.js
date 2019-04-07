function hurdleJump(hurdles, jumpHeight) {
     
      if([] === false){
        return true;
      }
      if(Math.max(...hurdles) <= jumpHeight) {
        return true;
      } else {
          return false;
      }
    
    }
    
    console.log(hurdleJump([1, 2, 3, 4, 5], 5)); //true
    console.log(hurdleJump([5, 5, 3, 4, 5], 3)); //false
    console.log(hurdleJump([], 4)); //true