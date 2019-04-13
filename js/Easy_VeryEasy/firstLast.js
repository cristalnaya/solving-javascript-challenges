function firstLast(arr) {
   let newArr =  [arr[0], arr[arr.length-1]];
   return newArr;
}

console.log(firstLast([5,10,15,20,25]));
console.log(firstLast(['foo', 'cat', '5']));