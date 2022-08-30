function odd_even(number){
    if(number %2 ===0){
        console.log(number,'is a even number');
    }else{
        console.log(number,'is a odd number');
    }
    return number;
}
const numbers = 58;
const output = odd_even(numbers);