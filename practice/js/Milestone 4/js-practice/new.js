function oddsum(arrays){
    let sum = 0;
    for(let i =0; i<arrays.length; i++){
        const loop=arrays[i];
        sum= sum+loop;
        // console.log(loop,sum);
    }
    return sum;
}
// second function 
function oddnum(numbers){
    const oddnumberarray=[];
    for(let i=0; i<numbers.length; i++){
        const element=numbers[i];
        if(element%2 !== 0){
            oddnumberarray.push(element);
        }
    }
    return oddnumberarray;
}
const mynumbers=[2,3,6,97,544,32,78,65,34,76,3,55,44,54];
const readyArray = oddnum(mynumbers);
const sumofreadyArray =oddsum(readyArray);
console.log(readyArray,sumofreadyArray);