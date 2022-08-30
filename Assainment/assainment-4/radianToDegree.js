// problem = 1------  radianToDegreee.
function radianToDegree(rad){
    //cheaking input types.
    if(typeof rad !== 'number'){
        return 'please enter a number:)'
    }
    //formula for radian to degree conver.
    const result = rad *(180 / Math.PI);
    return result;
}
const input = 8;
const output = radianToDegree(input);
console.log(output.toFixed(2));//useing toFixed for 2 digit.