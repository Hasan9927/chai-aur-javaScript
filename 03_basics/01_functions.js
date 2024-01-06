/****** Add numbers if their typeof is same ********/
function addTwoNumber(number1, number2){//here number1 and number2 is perameters 
    if(typeof number1 == 'number' && typeof number2 == 'number'){
        return(number1 + number2);
    }   
    return("Number1 And Number2 are not numbers");
    
};
const TwoNumbers = addTwoNumber(1, 2);//Here 1 and 2 is argumants
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
    return `${username.trimStart().trimEnd()} just logged in.`
};
const userStatus = loginUserMessage("       a      ");
console.log(userStatus);
