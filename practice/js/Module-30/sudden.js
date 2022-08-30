// What will be the output ?

/* function min(nums) {
    return Math.min(nums)
}
console.log(min([1, 3, 2])) */

// What will be the output?

/* const cube = x => x * x * x;
console.log(cube(2)) */

// What would be the output ? 
/* 
const [a, b] = [1, 2, 3, 4, 45, 5];
console.log(a + b); */

// What will be the value of y? 
/* const { x, y, z } = { x: 1, y1: 2, z: 3 };
console.log(x, y, z) */

// try it out 
/* const nums = [1, 2, 3, 4, 5];
let output = nums.filter(n => n % 2);
console.log(output);
 */
// How will you get the price from the product object? 

const product = {
    name: 'Laptop',
    model: 'Yoga 3',
    price: 49000,
    dusk: '512SSD'
}

const { price } = product;
console.log(price);