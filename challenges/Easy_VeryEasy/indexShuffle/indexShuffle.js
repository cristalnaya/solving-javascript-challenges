function indexShuffle(str) {

    let evenIndexed = [...str].filter((char, index) => index % 2 === 0);
    let oddIndexed = [...str].filter((char, index) => index % 2 !== 0)
  
    return evenIndexed.concat(oddIndexed).join('');
}
console.log(indexShuffle("abcdefg"));//acegbdf

module.exports = indexShuffle;