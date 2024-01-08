const userEmail = "a@gmail.com";

if(userEmail){
    console.log("Got email");
}else{
    console.log("Enter a email");
}

// Falsy Value
// 0, -0, false, undefined, NaN, null, ""; BigInt => 0n

// How to know if array have any property
const array = [];
if(array.length ===0){
    console.log("Array is empty");
}
else{
    console.log("Array is not empty");
}

// How to find if obj have any property
const myObj = {1:"this"};
if(Object.keys(myObj).length === 0){
    console.log("Object is empty");
}else{
    console.log("Object is not empty");
}

// Nullish Coalescing Operator ??: null undefined

let var1 ;
// var1 = 10 ?? 20;
var1 = nul??10;
console.log(var1);

// Turniary operator
// Condition ? true : false
const iceTeaPrice = 100;
iceTeaPrice <=80 ? console.log("Less than 80") : console.log("More than 80");
