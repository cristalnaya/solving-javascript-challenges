function Go(num) {
	if (num >= 1 || num < 60){
    let dash = '-';
    return dash.repeat(num);
  }
}

console.log(Go(1));
console.log(Go(5));