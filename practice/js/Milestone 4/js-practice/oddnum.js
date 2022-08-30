function sliceArray(numbers){
    const finalArray =[];
    for(let i=0; i<numbers.length; i++){
        const perameter =numbers[i];
        if(perameter%2 !== 0){
            finalArray.push(perameter);
        }
    }
    return finalArray;
}
// sum of the final array 

function oddSum(numbers){
    let sum =0;
    for(let i=0; i<numbers.length; i++){
        const perameter =numbers[i];
        sum = sum+perameter;
    }
    return sum;
}
const firstArray = [4,5,6,7,8,8,9,0,12,34,65,78,45,90];
const oddArray = sliceArray(firstArray);
const finalSum = oddSum(oddArray);
console.log(oddArray,finalSum);