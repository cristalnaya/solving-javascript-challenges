// find multiples of 3 and 5 
function sumOfMultiples(number) {
    let sum = 0;

    for(i = 0; i < number; i++){
        if(i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(sumOfMultiples(10));