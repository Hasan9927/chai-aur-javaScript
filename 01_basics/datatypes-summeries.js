// Primitives:
// 7 types: Number, Boolean , String , Null , Undefined, 
            Symbol, BigInt

// Symbol

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

const bigNumber = 2341451435451435n;
console.log(typeof bigNumber);

// Referece(Non-Primitive):
// Array, Objects, Functions

const heross = ["Hasan", "Muntaha", "Hossain"];
const object = {
    name: "Hasan",
    age:22,
};

const firstFunction = function(){
    console.log("Hello world");
}
