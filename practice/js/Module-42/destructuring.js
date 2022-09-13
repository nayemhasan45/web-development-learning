const numbers = [42, 33, 322];
// const first = numbers[0];
// const second = numbers[1];
const [first, second] = numbers;
// console.log(first, second);

function student(num1, num2) {
    const result = [num1, num2];
    return result;
}

const [firstNum, secondNum] = student(23, 33);
console.log(firstNum, secondNum);