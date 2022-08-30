function oddsum(numbers){
    let sum = 0;
    for(let i = 0; i<numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum +=element;
        // console.log(index,element,sum);
    }
    return sum;
}

function getodd(numbers){
    const oddnum = [];
    for(let i= 0; i<numbers.length; i++){
        const index =i;
        const element = numbers[index];
        if(element%2 !== 0){
            console.log(index, element);
            oddnum.push(element);
        }
    }
    return oddnum;
}

const mynumbers = [12, 23, 54, 32, 65, 765, 3, 8, 90, 24];
const myoddNum = getodd(mynumbers);
console.log(myoddNum);
oddsum(mynumbers);
