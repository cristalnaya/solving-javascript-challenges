function last(arr, n){
    if(n == null) {
      return arr[arr.length-1];
    }
    
    return arr.slice(Math.max(arr.length - n, 0));
  }
  console.log(last([7, 9, 0, -2])); //-2
  console.log(last([7, 9, 0, -2],3)); //[9,0,-2]
  console.log(last([7, 9, 0, -2],6));//[7, 9, 0, -2]