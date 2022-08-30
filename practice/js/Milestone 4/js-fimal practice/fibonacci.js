// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
function fibonicci(number){
    const series=[0,1];
    for(let i=2; i<=number; i++){
        series[i]=series[i-1]+series[i-2];
    }
    return series;
}

const mynumber = 20;
const output = fibonicci(mynumber);
console.log(output);