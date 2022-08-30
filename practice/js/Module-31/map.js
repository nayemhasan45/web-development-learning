const number = [2, 3, 4, 5, 6, 7];
const number2 = [];
for (const num of number) {
    const doubled = num * 2;
    number2.push(doubled);
}
// console.log(number2);
const dobuleIt = num => num * 2;
const map = number.map(dobuleIt);
// console.log(map);

//----------------------
// string maping 
const friendsName = ['nayem', 'noman', 'nahid', 'utsho', 'saykat', 'noyon', 'samim'];
const firstLatter = friendsName.map(name => name[4]);
// console.log(firstLatter);

//--------------
// map of object 

const products = [
    { id: 1, name: 'laptop', price: 45000 },
    { id: 1, name: 'mobile', price: 80000 },
    { id: 1, name: 'watch', price: 35000 },
    { id: 1, name: 'tablet', price: 23000 },
];
const items = products.map(x => x.name);
console.log(items);