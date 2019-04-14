function MultiplyByLength(arr) {
	return arr.map(num => num * arr.length);

}
console.log(MultiplyByLength([2, 3, 1, 0]));