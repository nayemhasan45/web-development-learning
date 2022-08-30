const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];
const find5 = numbers.find(x => x > 50);
// console.log(find5);

//--------------------
// object find 

const products = [
    { id: 1, name: 'laptop', price: 65000 },
    { id: 2, name: 'mobile', price: 80000 },
    { id: 3, name: 'watch', price: 30000 },
    { id: 4, name: 'tablet', price: 23000 },
];

const items = products.find(x => x.price < 50000);
const items2 = products.filter(x => x.price < 50000);
console.log(items);
console.log(items2);