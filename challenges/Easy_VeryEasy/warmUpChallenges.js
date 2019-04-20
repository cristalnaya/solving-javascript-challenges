function triArea(base, height) {
	return (base * height)/2;
}
console.log(triArea(3, 2)); //3


function concat(arr1, arr2) {
    return arr1.concat(arr2);
  }
  console.log(concat([1, 3, 5], [2, 6, 8])); // [1, 3, 5, 2, 6, 8]


  function divisibleByFive(n) {
    return n % 5 === 0 ? true : false;
  }
  console.log(divisibleByFive(5)); //true
  console.log(divisibleByFive(37)); //false