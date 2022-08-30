//problem = 2 ------------ cheaking js file type.
function isJavaScriptFile(string){
    //cheaking input types.
    if(typeof string !=='string'){
        return 'please enter a string';
    }
     // cheaking if it is js file or not.
    let cheaker = string.endsWith('.js');
    if(cheaker === true){
        return true;
    }else{
        return false;
    }
}
const inputof = 'name.js';
const output = isJavaScriptFile(inputof);
console.log(output);