// write a function to show the largest friend name 
function bestFriend(array){
    let largestname = array[0];
    for(let i = 0; i<array.length; i++){
        const element = array[i];
        if(element.length>largestname.length){
            largestname = element;
        }
    }
    return largestname;
}
const myinput = ['nayem','noman','honu','nahid rahaman','uthso','noyon','samim','saykay'];
const output = bestFriend(myinput);
console.log(output);