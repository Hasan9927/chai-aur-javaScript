const coding = ['js' , 'ruby', 'cpp', 'java'];
coding.forEach(element => {
    // consosle.log(element);
});
// forEach is a callback function cz this function haven't any name

// This is another way of doing this 
function printMe(item){
    // console.log(item);
}
coding.forEach(printMe)

// forEach contains many perameters except items
coding.forEach((item, index,arr) => {
    // console.log(item, index, arr);
});

const myCoding = [
    {
        langName :"JavaScript",
        langFileName : "js",
    },
    {
        langName :"Java",
        langFileName : "java",
    },
    {
        langName :"css",
        langFileName : "cascading style sheet",
    },
]
myCoding.forEach(element => {
    console.log(element.langFileName);
});
// Here we access the objects value in an array