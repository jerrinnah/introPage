// Get date

const weekday = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

// Get day of the week 

const d = new Date();
let day = weekday[d.getDay()];
console.log(day);

document.querySelector('.currentDay').innerHTML = day;

// Get current time 

let date = new Date();

// Get current date 

// const currentTime = date.toTimeString();
const currentTime = date.toLocaleTimeString();
console.log(currentTime);

// Get current time 

document.querySelector('.currentTime').innerHTML = currentTime;

// style git 
let git = document.querySelector('.gitRepo').innerHTML;







