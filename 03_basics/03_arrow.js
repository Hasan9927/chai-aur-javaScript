const user = {
    username : "Hasan",
    age: 23,

    welcomeMassage: function(){
        console.log(`${this.username}, Welcome to our website`); // Here this is used in a current context so we can use this to refer (user)
        console.log(this);
    }
}
user.welcomeMassage();

// This in details


const chai = function(){
    let username = 'Hasan'
    console.log(this.username);
}
// chai();

const chai2 = () =>{
    let username = 'Hasan'
    console.log(this.username);
};
chai2();   

// Implicite return : We add num1+ num2 in the same line
const addTwoNumber = (num1,num2) =>(num1+num2);
/**
 * Here is a catch if we use () after arrow funtion we need not to use return
 * But if we use {} after arrow function we need to use return
 *  */ 
console.log(addTwoNumber(1,2));

// Explicite return: Normally we used to write code
const addThreeNumber = (num1, num2, num3) => {
    return num1+num2+num3;
}
console.log(addThreeNumber(1, 2, 3))