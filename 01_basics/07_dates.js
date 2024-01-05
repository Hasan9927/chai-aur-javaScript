// Dates

let myDate = new Date();
console.log(typeof myDate);//object
console.log(myDate.toString());
console.log(myDate.toDateString());//gives date only
console.log(myDate.toTimeString());//gives time only
console.log(myDate.toLocaleDateString());//give the local date
console.log(myDate.toLocaleString());//gives local time and date
console.log(myDate.toLocaleTimeString());//gives locan time only

const myCreatedTime = new Date(2023, 0, 23 , 6, 30);
console.log(myCreatedTime.toLocaleString());