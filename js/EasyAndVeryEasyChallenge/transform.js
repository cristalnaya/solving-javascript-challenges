function transform(arr) {
	return arr.map((num, i) => {
    return num % 2 === 0 ? num-=1 : num+=1;
  });
  
}
console.log(transform([1, 2, 3, 4, 5]));
// [2, 1, 4, 3, 6]
console.log(transform([3, 3, 4, 3]));//[4,2,5,2]
