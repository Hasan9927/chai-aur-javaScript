// for in (for object)
const langFullForm = {
    js: "Javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "Swift by apple"
}
for (const key in langFullForm ) {
    console.log(`\n ${key} shortform is for ${langFullForm[key]}`);
}


// for in (for arrays)
const arr = ['hello' , 'I', "am", "Hasan"];
for (const key in arr) {
    console.log(key);
}
// Here we can see that we also can use for in for arrays but it will give keys .. Yes arrays also have key [0,1,2,3,4,....] but in numbers that's why object invented

// To get values with the for in loop in arrays =>
for (const key in arr) {
    console.log(`key is ${key} & value is ${arr[key]} `);
}