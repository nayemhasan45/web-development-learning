//problem = 5 --------- cheaking my best firend.
function isBestFriend(num1,num2){
    //cheaking input types.
    if(typeof num1!=='object' || typeof num2!=='object'){
        return 'please enter a object';
    }
    if(num1.name===num2.friend && num1.friend===num2.name){
        return true;
    }
    else{
        return false;
    }
}

const name1 = {name:'nayem',  friend:'utsho'};
const name2 = {name:'utsho',  friend:'nayem'};
console.log(isBestFriend(name1,name2));