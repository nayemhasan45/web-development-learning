function make_avg(numbers){
    let sum = 0;
    for(let i = 0; i<numbers.length; i++){
        const element = numbers[i];
        sum = sum+ element;
        // console.log(element);
    }
    return sum;
}

const array = [5,6,7,23,65,45,67,76,43];
const output = make_avg(array);
console.log(output);