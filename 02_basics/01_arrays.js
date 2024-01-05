//array

const myArr = [0,1,2,3,4,5,6];

const myHero = ["SpiderMan","Batman" ,"SuperMan"];
console.log(myHero.length);

myArr.push(7); // Add given element(7) to the last of the array
console.log(myArr);
myArr.pop();// remove the last element
console.log(myArr);

myArr.unshift(11); // Add element in the first of the array
console.log(myArr); 

myArr.shift()      //removes the first element


console.log(myArr.includes(1));

const newArr = [7,8,9,10]
const array = [...myArr,...newArr]
console.log(array);


// Slice, Splice

const myn1 = [1,2,3,4,5,6];
console.log("A", myn1);

// Slice
const myn2 = myn1.slice(1,3);
console.log("B", myn2);
console.log("B", myn1);

// Splice
const myn3 = myn1.splice(1,3);
console.log('C',myn3);
console.log("C",myn1);

/**
 * Slice don't manipulate the original array
 * Splice manipulate the original array
 * From the previous example we can see that very well
 */