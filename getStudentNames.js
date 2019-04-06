function getStudentNames(students) {
  return students.map(({ name }) => name);
}

console.log(getStudentNames([
  { name: "Steve"},
  { name: "Mike"},
  { name: "John"}
]));