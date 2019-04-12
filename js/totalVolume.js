// Edabit Challenge
function totalVolume(...boxes) {
	//console.log(...boxes);
  
   let arr = [...boxes].map((num) => {
      return num.reduce((prev, current) => {
        prev *= current;
        return prev;      
      })
    }) 
    return arr.reduce((prev, current) => prev+= current);
}
console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1])); //63