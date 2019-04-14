// from codewars
function list(names){
  //your code here
  return names.map(a => a.name).join(', ').replace(/,(?!.*,$)/gmi, ' &');
}
console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]));//Bart, Lisa & Maggie
console.log(list([ {name: 'Maggie'} ])); // Maggie
console.log(list([ {name: 'Bart'}, {name: 'Lisa'} ]));//Bart & Lisa