function reverse(bool) {
  console.log(!bool);
  return (typeof bool !== 'boolean') ? "boolean expected" 
  // use ! to reverse boolean from true to false and the opposite
        : !bool;

}

console.log(reverse(true));
console.log(reverse(false));
console.log(reverse(null));