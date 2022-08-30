var a;
var b;
var c;

a = 1;
b = 5;
c = "string!"
console.log(a,b,c)

// Variable declarations
var studdlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studdlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;
console.log(studdlyCapVar,properCamelCase,titleCaseOver)

// let camper = "James";
// let camper = "David";
// console.log(camper);
/* 
function add(x,y,z){
    return x+y+z;
}
console.log(add(...myarray)); */
const myarray = [0,1,2,3,4,5];

const myarray2 =[...myarray];
console.log(myarray2);

// concate of an array.
const kaka= [2,34,4,56,76];
const mama = [77,78,79,80];
const nana = ['kaka array',...kaka,'mamar array',...mama];
console.log(nana);
const dada = kaka;
console.log(dada);

//copy the array


const kop =[23,43,45];
const cup = [...kop];
cup.push(46,47,48);
console.log(kop,cup);