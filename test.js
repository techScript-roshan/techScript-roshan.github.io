// https://agecalculatorroshan.blogspot.com/

// let calculate_date = new Date();
// console.log(calculate_date);
// console.log(calculate_date.toDateString());
// console.log(calculate_date.toJSON());
// console.log(calculate_date.toISOString());
// console.log(calculate_date.toLocaleDateString());
// console.log(calculate_date.toLocaleString());
// console.log(calculate_date.toLocaleTimeString());

// let experienceDate = new Date(2022, 5, 1);
let currentTime = new Date(2022,6,1).getTime();
console.log(currentTime);
let second = Math.floor(currentTime / 1000);
let minutes = Math.floor(second / 60);
let hours = Math.floor(minutes / 60);
let day = Math.floor(hours / 24);
let months = Math.floor(day / 30);
let years = Math.floor(day / 365);

console.log("Second is : ", second);
console.log("Minutes is : ", minutes);
console.log("Hours is : ", hours);
console.log("Day is : ", day);
console.log("Month is : ", months);
console.log("Years is : ", years);
// console.log(experienceDate.getTime());