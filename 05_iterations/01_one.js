//for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(i <= 5){
        // console.log(element);
        if(i == 5){
            // console.log("5 is the ending point");
        }
    }
}

// Print table from 1 to 100 // frking easy
for (let i = 1; i <= 100; i++) {
    // console.log("For ",i," the table is",);
    for (let j = 1; j <= 10; j++) {
        // console.log(`${i} * ${j} = ${i*j}`);
    } 
}

let myArray = ["Hasan","Hossain","Hasib"];
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}

// Break & continue

// Break;
console.log("\nBreak");
for (let i = 0; i <= 20; i++) {
    if(i ==5 ){
        console.log(`Detected 5 \n`);
        break;
    }
    console.log(`The value of i is : ${i}`);
}
console.log("Continue");

// Continue;
// So what continue does .. it skips the part in the condition and let the loop continue till the end
for (let i = 0; i <= 20; i++) {
    if(i ==5 ){
        console.log(`Detected 5 so skip it and continue`);
        continue;
    }
    console.log(`The value of i is : ${i}`);
}