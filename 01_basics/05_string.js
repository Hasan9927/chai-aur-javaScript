const name = 'Hasan';

const discordName = new String('MHasan');
console.log(discordName);

console.log(discordName.length);
console.log(discordName.charAt(2));
console.log(discordName.toUpperCase());
console.log(discordName.indexOf("M"));
console.log(discordName.trim()); // trims only white spaces

const newString = discordName.substring(0, 4);
console.log(newString);

const anotherString = discordName.slice(0,3);
console.log(anotherString);
//to replace something use replace
const url ='https://youtube.com/mahedi%20hasan';
console.log(url.replace("%20", '-'));
console.log(url.includes("mahedi"))
/**
 * Split is important
 */
const newName = new String('Mahedi-Hasan-Noman');
console.log(newName.split("-",1));
/**
 * 1st value is in which condition you want to split
 * 2nd value is how many you want to split (in this contidion we split just 
 one)
 */ 

const fname = 'Mahedi';
const lname = 'Hasan';
//concat added two values into one
const concatOfCity = fname.concat(lname);
console.log(concatOfCity);