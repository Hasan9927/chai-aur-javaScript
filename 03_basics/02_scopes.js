/* 
{} = is called scope when it comes after (function) or any  
     (if else) statement but (object) is not called scope .. cz that is object declaration
*/
/**
 * var is not ideal cz it doesn't maintain the scope
 */
if(true){
    let a = 10;
    const b= 23;
    var c = 33;
}
// console.log(a); // It will give an error a is not defined
// console.log(b); // It will give an error b is not defined
console.log(c); // but it doesn't show any error cz var is not maintain scope resulation method soo we avoid it.


if(true){
    const username = 'Hasan';
    if(true){
        const website = "youtube";
        console.log(username, website);// can access username cz it in the global scope
    }
    // console.log(website); //can't clg cz it is outsite of the scope
}

// we can call funtion before it declared but ....
addOne(2);
function addOne(num){
    return num+1;
}
// but .. here we will face error cz we keep the function inside in a variable which against the hoistin rules, so we have to keep it below where we declare it

// addTwo(2);
const addTwo = function(num){
    return num+2;
}
addTwo(2);
