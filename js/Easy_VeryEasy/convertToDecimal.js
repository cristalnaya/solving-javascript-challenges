function convertToDecimal(perc) {
  return perc.map(num => parseFloat(num)/100);
}

console.log(convertToDecimal(["33%", "98.1%", "56.44%", "100%"]));

