const score = 400
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);//make the number to string after that we can use the .lenght property
console.log(typeof Number(balance.toFixed(2))); // It fixes the value after decimal here the balance will be (100.00).

const newBalance = 23.987458
console.log(newBalance.toPrecision(3));
//to local string

//usage 1
const hundreds = 10000000;
console.log(hundreds.toLocaleString('en-BD'));

//usage 2
const array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
const localeString = array1.toLocaleString('en', { timeZone: 'UTC' });
console.log(localeString);

/*********** Maths *********/
console.log(Math); //go to console to see details
console.log(Math.abs(-400));// Make the number in positive
console.log(Math.round(2.3));// Make it round
console.log(Math.ceil(2.3));
console.log(Math.floor(2.3));
console.log(Math.min(212, 1 ,454,547,45,45));// Finds the min value
console.log(Math.max(212, 1 ,454,547,45,45));// Finds the max value

console.log(Math.random()); // Gives a num between 0 to less than 1
console.log(Math.floor(Math.random()*10)+1);

//suppose we want a num between 10 to 20.. so we can get it by--
const max = 20;
const min = 11;
const numBetween11To20 = Math.floor(Math.random()*(max-min+1)+min);
console.log(numBetween11To20);
