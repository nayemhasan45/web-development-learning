function factorial(num){
    let fact = 1;
    for(let i=1; i<=num; i++){
        const element = i;
        fact = fact * element; 
        console.log(element,'*',element, '=', fact);
    }
    console.log(`The factorial of ${num} is ${fact}.`);
    return fact;
}
const output =factorial(5);
console.log(output);
