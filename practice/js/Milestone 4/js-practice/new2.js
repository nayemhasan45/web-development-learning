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