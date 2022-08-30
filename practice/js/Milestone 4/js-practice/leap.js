function leapYear(year){
    const check = year%4;
    if(check===0){
        console.log('leap year');
        return true;
    }else{
        console.log('not a leap year');
        return false;
        
    }
}
const checker =leapYear(2085);
console.log(checker);