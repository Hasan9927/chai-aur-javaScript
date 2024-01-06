/****** Add numbers if their typeof is same ********/
function addTwoNumber(number1, number2){//here number1 and number2 is perameters 
    if(typeof number1 == 'number' && typeof number2 == 'number'){
        return(number1 + number2);
    }   
    return("Number1 And Number2 are not numbers");
    
};
const TwoNumbers = addTwoNumber(1, 2);//Here 1 and 2 is argumants
/**
 * (...) is called rest and spread operator based on their use case we can see that in top example
 */
console.log("Addition of two numbers are: " ,TwoNumbers);
function addNumbers(num1, num2){
    return num1+num2;
}
const addition = addNumbers(1, 2);
console.log("Addition is",addition);

///////////////////////////////
/**** User Name have to contain character *******/
function loginUserMessage(username){
    if(!username || (username.trim()).length == 0){
        return console.log('Please enter a username')
    }
    return `"${username.trimStart().trimEnd()}" just logged in.`
};
const userStatus = loginUserMessage(" Mahedi Hasan");
console.log(userStatus);

/// (...) is called rest and spread operator both based on their use case 
// Example

function addedItems(...items){
    return items;
}
console.log(addedItems(100,200));
// Object
const user = {
    userName: "Hasan",
    password: "123pass",
}
function handleObject(anyobject){
    console.log(`User name is ${anyobject.userName} and password is ${anyobject.password}`);
}
handleObject(user);

// Array

const newArray  = [12,15,154,15785];
function getNewArray(array){
    return array[1];
}
console.log(getNewArray(newArray));