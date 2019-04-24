function toArray(num) {
    let newArr = (num.toString()).split('').map(n => parseInt(n));
    return newArr;
  }
  console.log(toArray(235)); //[2,3,5]
  console.log(toArray(0)); //[0]
  
  function toNumber(arr) {
   
      let reduce = arr.reduce((acc, num) => {
      return acc += (num.toString())
      
    }, '');
    return parseInt(reduce);
    
  }
  console.log(toNumber([2,3,5])); // 235
  console.log(toNumber([0])); // 0