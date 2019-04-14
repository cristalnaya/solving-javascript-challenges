function getExtension(arr) {
	return arr.map(fileName => {
        return fileName.split('.').slice(1).join(' ');
  });
}
console.log(getExtension(["project1.jpg", "project1.pdf", "project1.mp3"])); // ["jpg", "pdf", "mp3"]