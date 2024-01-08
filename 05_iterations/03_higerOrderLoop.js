// for of
const arr = [2,3,4,5,6];
for (const num of arr) {
    // console.log(`${num}`);
}

const greeting = "Hello world!";
for (const greet of greeting) {
    // console.log(`Each char is ${greet}`);
}


// Map .....

const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));
// Expected output: 1

map1.set('a', 97);

console.log(map1.get('a'));
// Expected output: 97

console.log(map1.size);
// Expected output: 3

// we can get key and value both [key ,value] = here we destucturing the value
for (const [key, value] of map1) {
    console.log(`${key}=> ${value}`);
}



