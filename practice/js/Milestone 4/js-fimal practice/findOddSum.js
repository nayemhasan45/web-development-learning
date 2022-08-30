// find odd number from an array
function findOdd(array){
const oddNum = [];
    for(let i = 0; i<array.length; i++){
        const element = array[i];
        if(element%2 !== 0){
            oddNum.push(element);
        }
    }
    return oddNum;
}

//find sum of the odd number
function findOddSum(array){
    let sum = 0;
    for(let i = 0; i<array.length; i++){
        const element = array[i];
        sum += element;
    }
    return sum;
}

const myArray = [3,324,45,65,88,34,54,55,9,78,33];
const output = findOdd(myArray);
const finalOutput = findOddSum(output);
console.log(finalOutput);