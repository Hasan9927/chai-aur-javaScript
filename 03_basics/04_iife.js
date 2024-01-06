// Immediately Invoked Function Expression (IIFE)
/*
    IIFE: The funciton which executed immediately and sometime because of global scope it polutes the function so to remove the global scope's declation's polution we use iife .   
 */
(function chai(){
    //This type of iife is called {Named iife}
    console.log("DB CONNECTED");
})(); // this ; is very important cz it tells the function to end.

//() () // here the first ( ) is definition of function and the() is the execution
(() =>{
    // Unnamed iife
    console.log(`DB2 CONNECTED`);
})();
// we can pass value here also.
((name) =>{
    console.log(`DB2 CONNECTED, Mr. ${name}`);
})("Hasan");