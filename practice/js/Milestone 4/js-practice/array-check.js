function findleapYear(array){
    const leapyear=[];
    for(let i=0; i<array.length; i++){
        const element = array[i];
        if(element %4 ===0){
            leapyear.push(element);
        }
    }
    return leapyear;
}

const Array =[2023,2024,2025,2028,2030];
console.log(findleapYear(Array));