function capToFront(s) {
    let strUpper = '';
    let strLower = '';
    for (let i = 0; i < s.length; i++) {
      if (s[i] === s[i].toUpperCase()) {
        strUpper += s[i].toUpperCase();
        //  str+=s[i];
      } else if (s[i] === s[i].toLowerCase()) {
        strLower += s[i].toLowerCase();
      }
    }
    return strUpper += strLower;
  }
  console.log(capToFront("hApPy")); // "APhpy"

  module.exports = capToFront;