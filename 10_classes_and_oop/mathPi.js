const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai, 'name',{
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (const [key, value] of Object.entries(chai)) {
    console.log(`${key} : ${value}`);
}