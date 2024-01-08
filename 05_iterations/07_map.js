const nums = [1,2,3,4,5,6,7,8];

//Chaining
const newNums = nums.filter(num => num >5).map(num =>num+10);
console.log(newNums);