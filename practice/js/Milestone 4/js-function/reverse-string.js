function riversestring(str){
    var reversed = '';
    for(let i =str.length-1; i>=0; i--){
        const element = str[i];
        reversed  = reversed+element;
        console.log(element,reversed);
    }
    return reversed;
}

const mystring = 'i am a good boy';
const myoutput = riversestring(mystring);
console.log('reversed output :', reversed);