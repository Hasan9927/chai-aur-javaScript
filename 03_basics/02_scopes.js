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

