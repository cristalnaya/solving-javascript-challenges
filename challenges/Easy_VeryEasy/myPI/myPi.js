function myPi(n) {
	return parseFloat(Math.PI.toFixed(n));
}
console.log(myPi(5)); // 3.14159
console.log(myPi(1)); // 3.1

module.exports = myPi;