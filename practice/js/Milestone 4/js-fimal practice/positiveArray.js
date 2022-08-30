function onlyPositive(array){
    const newArray = [];
    for(let i = 0; i<array.length; i++){
        const element = array[i];
        if(element <0){
            break;
        }
        newArray.push(element);
    }
    return newArray;
}

const myArrayInput = [5,6,32,654,656,34,-4,34,54];
const output = onlyPositive(myArrayInput);
console.log(output);