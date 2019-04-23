// from FCC
function bouncer(arr) {
    
    return arr.filter(elem => {
      if(new Boolean(elem) === false){
        return false;
      }
      return elem;
    });
  }
  
  console.log(bouncer([7, "ate", "", false, 9]));
  
  module.exports = bouncer;