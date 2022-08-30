function factorial(number){
    let fact=1;
    for(let i=number; i>1; i--){
        fact= fact*i;
    }
    return fact;
}
const finalFactorial=factorial(9);
console.log(finalFactorial);