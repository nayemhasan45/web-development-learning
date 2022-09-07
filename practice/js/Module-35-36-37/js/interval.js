// console.log('hi');
function kaka() {
    console.log('third');
}
const kaka2 = () => {
    console.log('third from arrow function');
}
console.log('first');
console.log('second');
// console.log('third')
// setTimeout(kaka, 1000)
// setTimeout(() => {
//     kaka();
// }, 2000);
// 
let seconds = 0;
const intervalId = setInterval(() => {
    console.log(++seconds);
    if (seconds === 5) {
        clearInterval(intervalId);
    }
}, 1000);
// kaka2();
console.log('fourth');
console.log('fifth');