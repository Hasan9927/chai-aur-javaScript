const chai = {
    name: "ginger tea",
    price: 250,
    isAvailable: true,
    
    orderChai: function()
    {
        console.log(`Tea is not prepeared`)
    }
}
// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (const [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){

        console.log(`${key} : ${value}`)
    }
}
