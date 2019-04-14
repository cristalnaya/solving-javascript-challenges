// solution to challenge from edabit, that didn't pass the test, but seems that work for me
function hashPlusCount(str) {
    let arr = [];
    
    if(!str || str == ''){
      return Array.of(0, 0);
    } 
    
    arr.push(((str.match((/#/g)).length) || []), ((str.match((/[+]/g)).length) || []));
    return arr;
  }
  console.log(hashPlusCount("###+")); //[3, 1]
  console.log(hashPlusCount("##+++#")); //[3, 3]
  console.log(hashPlusCount("#+++#+#++#"));//[4,6]
  console.log(hashPlusCount(""));//[0,0]


module.exports = hashPlusCount;




