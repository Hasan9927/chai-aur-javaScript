const myNums = [1,2,3,4]

const addNums = myNums.reduce((accumulator, currentVal) =>(
    console.log(`acc: ${accumulator} and currval: ${currentVal}`),
    accumulator+currentVal
),0)
// Here the 0 is accumulator and currval is the array values
console.log(addNums);

// shopping cart : add all the prices
const shoppingCart = [
    {
        itemName : "js Course",
        price: 1000,
    },
    {
        itemName : "ruby Course",
        price: 1999,
    },
    {
        itemName : "Python course",
        price: 4999,
    }
]

const pricetopay = shoppingCart.reduce((accu,item) => (accu +item.price) ,0)
console.log(pricetopay);