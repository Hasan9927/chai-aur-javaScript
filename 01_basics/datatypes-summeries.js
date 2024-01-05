// Primitives:
/* 7 types: Number, Boolean , String , Null , Undefined, 
            Symbol, BigInt
*/
// Symbol

const id = Symbol("123");
const anotherId = Symbol("123");

// console.log(id === anotherId);

const bigNumber = 2341451435451435n;
// console.log(typeof bigNumber);

/* 
    Referece(Non-Primitive): Array, Objects, Functions
*/
const heross = ["Hasan", "Muntaha", "Hossain"];
const object = {
    name: "Hasan",
    age:22,
};

const firstFunction = function(){
    console.log("Hello world");
}

        /***********Memory***************/

/* 
Stack Memory(Primitive type: boolean, Undefined, Symbol, Number, String,
                            Null, BigInt     )
*/
/* 
    Stack: In stack memory it copies the memory .. if we want 
          to use it anywhere else 
*/
let firstName = 'Hasan';
let fullName = firstName;

fullName = 'Mahedi Hasan';

/*
 Here fullName made a copy of firstName and put it the value inself .... So if we change the value of fullName it will change the value of fullName but the firstName value will remain same....
*/

console.log(firstName);
console.log(fullName);

// Heap Memory(Non-Primitive type: array, object, function)
/*
 Heap: In Head memory if we want to use it again , it gives 
       the original value .
*/

let userOne = {
    name: 'Hasan',
    age:22,
}
let userTwo = userOne;

userOne.city =  'Dhaka'
console.log(userOne,userTwo);
// Here if we change userOne , the userTwo is also going to change so we can say that Heap is going to referece the previous value