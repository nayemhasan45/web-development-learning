/* // reverse while loop 
function factorial(number){
    let i = number;
    let num=1;
    while(i>=1){
        num *=i;
        i--;
    }
    return num;
} */
// console.log(factorial(6));

// starait line 

function factorial2(number){
    let i=1;
    let num = 1;
    while(i<=number){
        num*=i;
        i++;
    }
    return num;
}

console.log(factorial2(6));