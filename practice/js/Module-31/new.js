const num = [1, 3, 5, 7, 9];
const newNum = [];
for (let i = 0; i < num.length; i++) {
    const element = num[i] + 1;
    newNum.push(element);
}
console.log(newNum);
// console.log('kakak');

// useing .map function 

const evenNum = num.map(x => x + 1);
console.log(evenNum);

// problem-2 --------------------------------------

const number = [33, 50, 79, 78, 90, 101, 30];
const divisible = number.find(x => x % 10 === 0);
console.log(divisible);