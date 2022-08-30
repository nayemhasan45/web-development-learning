/* const myArray = [3,34,45,65,88,34,54,55,9,78,33];
console.log(myArray.includes(356));
console.log(myArray.indexOf(3));


const friends = ['nayem','noman','honu','nayem',
    'nahid','uthso','nahid','noyon',
    'samim','noman','noyon','saykay','samim'];
let bestF = [];
for(let i=0; i<friends.length; i++){
    const element = friends[i];
    if(bestF.indexOf(element) === -1){
        bestF.push(element);
    }
}
console.log(bestF); */
// const array1 = [2, 3, 1];
// console.log(Math.min(...array1));

//fing the second largest of an array
/* const myArray=[3,4,5,6,90,70,8,69];
function secondLargest(array){
    const secondlargest =[];
    const firsLargest = Math.max(...array);
    for(let i=0; i<array.length; i++){
        const element = array[i];
        if(element!==firsLargest){
            secondlargest.push(element);
        }
    }
    const finalSecondLargest =Math.max(...secondlargest);
    return finalSecondLargest;
}
const output = secondLargest(myArray);
console.log(output); */

/* const myinput = ['nayem','noman','honu','nahid rahaman','uthso','noyon','samim','saykay'];
// let output = myinput.toString();
const string     = myinput.toString();
console.log(string);
// console.log(typeof(myinput));
// console.log(myinput.i);
console.log(Array.isArray(string)); */


// practice more --------------------------------


// program to find the factorial of a number

// take input from the user
const number = parseInt(5);

// checking if number is negative
if (number < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}

// if number is 0
else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
}

// if number is positive
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
        console.log(i,'*',i,'=',fact)
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}