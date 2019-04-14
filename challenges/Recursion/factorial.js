function factorial(int) {
	if(int < 0) {
    return;
  }
  if(int === 0){
    return 1;
  } 
  return int * factorial(int - 1);
}
console.log(factorial(3));//6