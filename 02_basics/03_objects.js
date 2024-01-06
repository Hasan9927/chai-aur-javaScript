// Singleton object

// Object Literals

const mySym = Symbol("key1")

const myObject = {
    name: "Hasan",
    "full name" : "Mahedi Hasan",
    age: 23,
    [mySym] :"myKey1", // This is the way of declaring symbol
    country:"Bangladesh",
    isLoggedIn: false,
    email:"study.mine9927@gmail.com",
}

console.log(myObject.name);// But we can't access full name by this
console.log(myObject["full name"]);// This method is more precise and efficint
console.log(myObject[mySym]);
myObject.email = "mhasan.h341@gmail.com";
console.log(myObject);

// Object.freeze(myObject); // By this we can't change or edit the object

myObject.greetings = function(){
    console.log(`Hello ${this.name}` );// Here by this we access the value of myObject
}
myObject.greetings();