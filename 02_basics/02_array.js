const marvel_heros = ["spiderman", "ironman", "hulk"];
const dc_heros = ["batman", "superman", "flash"];
const more_heros = ["antman", "msMarvel", "naruto"]

const all_heros = marvel_heros.concat(dc_heros);
console.log(all_heros);

// But we will combine arrays using spread oparetor

const all_new_heros = [...marvel_heros,...dc_heros,...more_heros]
console.log(all_new_heros);
// As we can see we can combine more than two arrays by this method
// So spread method is more popular


const complex_array = [1,2,12,235,[121,24,124,[12,14,1,15]],[1,2,3,4]];
const complex_array_simplified = complex_array.flat(Infinity);//we can use 1 ,2 ,3 .... upto infinity
/* 
    Flat: Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
*/
console.log(complex_array_simplified);

// To know if the array is array or not
console.log(Array.isArray("Hasan"));// Will returns false
// To make it in a array we can use from method
console.log(Array.from("Hasan"));
//Now the preivous line will make "Hasan" string in a array

let score1 = 100;
let score2 = 200;
let score3 = 300;
const new_array =  Array.of(score1,score2,score3);
console.log(new_array);
// Will make this to an array