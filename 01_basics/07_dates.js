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

// Date till now from 1970 
let myTimeStamps = Date.now();
console.log(Math.floor(myTimeStamps/1000));

let newDate = new Date();

console.log(`${newDate.getDate()}.${newDate.getMonth()+1}.${newDate.getFullYear()}`);

//we can specified date like this also
console.log(newDate.toLocaleString("default",{
    weekday:'long',
    day:"2-digit",
    year:"numeric"

}));