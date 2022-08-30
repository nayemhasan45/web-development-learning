/* const array = (arr)=>{

} */

const array = ['utsho', 'noman', 'nahid', 'noyon', 'samim', 'saykat', 'emran', 'tanvir', 'rony'];
let newArray = [];
const even = (array) => {
    for (const newValue of array) {
        if (newValue.length % 2 !== 0) {
            newArray.push(newValue);
        }
    }
}
even(array);
console.log(newArray);
