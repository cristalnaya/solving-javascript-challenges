function month_name(num) {
  let months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

return months[num - 1] || '';
}

console.log(month_name(-1));