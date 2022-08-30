function lowest(array){
    const lowest = array[0];
    for(let i = 0; i<array.length; i++){
        const element = array[i];
        if(lowest<element){
            lowest = element;
        }
    }
    return lowest;
}




const myArray =[23,45,5,435,65,234,778,12];
const preameter = lowest(myArray);
console.log(preameter);