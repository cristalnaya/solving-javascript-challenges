function checkFactors(factors, num) {
    return factors.every(elem => num % elem === 0);
    
  }
  console.log(checkFactors([2, 3, 4], 12));//true
  console.log(checkFactors([1, 2, 3, 8], 12));//false