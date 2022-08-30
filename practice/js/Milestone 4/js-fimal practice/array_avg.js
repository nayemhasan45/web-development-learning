function array_avg(array){
    let sum = 0;
    for(let i = 0; i<array.length; i++){
        const element = array[i];
        sum = sum+element;
    }
    sum = sum/array.length;
    return sum;
}

const myArray = [3,34,45,65,88,34,54,55,9,78,33];
console.log(array_avg(myArray));