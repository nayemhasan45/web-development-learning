// find the smallest number
/* function smallest_num(array){
    const resutl =  Math.min(...array);
    return resutl;
}
const myArray = [324,45,65,88,34,54,55,9,78,33];
const input = smallest_num(myArray);
console.log(input); */
// trying another method

function lowest(array){
    let lowest   = array[0];
    for(let i=0;i<array.length; i++){
        let element= array[i];
        if(element<lowest){
            lowest  = element;
            // console.log(element);
        }
    }
    return lowest;
}
const myArray2 = [324,5,65,88,34,54,55,9,78,33];
const output = lowest(myArray2);
console.log(output);