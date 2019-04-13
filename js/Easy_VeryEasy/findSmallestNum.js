function findSmallestNum(arr) {
	return arr.sort((a,b) => a - b)[0];
}

console.log(findSmallestNum([34, 15, 88, 2]));
