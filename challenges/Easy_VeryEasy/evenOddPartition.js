function evenOddPartition(arr) {
    let even = [];
    let odd = [];
    let all = [];
    arr.map((num, i) => {
      if (num % 2 === 0) {
        even.push(num);
      } else {
          odd.push(num);
      }
    });
    all.push(even, odd);
    return all;
  }
  console.log(evenOddPartition([5, 8, 9, 2, 0])); // [[8, 2, 0], [5, 9]]
  console.log(evenOddPartition([])); // [[], []]
  