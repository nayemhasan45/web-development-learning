function multiplication(number){
        let resutl = 1;
    for(let i = 1; i<=10; i++){
        let multiple = i * number;
        resutl = multiple;
        console.log(number,'*',i,multiple);
    }
    return resutl;
}
const numbers = 5;
const output = multiplication(numbers);
console.log(output);