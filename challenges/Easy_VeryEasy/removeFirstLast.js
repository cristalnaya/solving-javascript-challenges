function removeFirstLast(str) {
    if (str.length <= 2){
      return str;
    }
      return str.slice(1, -1);
  }
  console.log(removeFirstLast("hello"));
  console.log(removeFirstLast("to"));