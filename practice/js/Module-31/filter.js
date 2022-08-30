const number = [1, 2, 3, 4, 5, 6, 7];

const output = number.filter(num => num % 3 === 0);
// console.log(output);

//---------------------
// Object filter 
const products = [
    { id: 1, name: 'laptop', price: 45000 },
    { id: 1, name: 'mobile', price: 80000 },
    { id: 1, name: 'watch', price: 35000 },
    { id: 1, name: 'tablet', price: 23000 },
];
const watchPrice = products.filter(x => x);
console.log(watchPrice);

const stuInfo = JSON.stringify({ name: "James", roll: 3 });
console.log(stuInfo.name);
