const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((x, y) => {
    // console.log(x, y);
    return x + y;
}, 5);
// console.log(sum);

//----------------
//object reduce try
const products = { id: 1, name: 'laptop', price: 65000 };

// const allPrice = products.reduce((x, y.price) => x === y, y.price === 23000);
// console.log(allPrice);
const items = products['price'];
console.log(items);
const nameff = 'name';
const item = products[nameff];
console.log(item);