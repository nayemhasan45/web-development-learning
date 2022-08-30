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

// --------------------------------------------------------------

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

//----------------------------------------------------

//problem = 3 --------_ calculate the oil price.
function oilPrice(diesel,petrol,octane){
    //cheaking input types.
    if(typeof diesel!=='number' || typeof petrol!=='number' || typeof octane!=='number'){
        return 'please enter a number';
    }
    const dieselPrice = 114;
    const petrolPrice = 130;
    const octanePrice = 135;
    const totalDiesel = dieselPrice*diesel;
    const totaPetrol = petrolPrice*petrol;
    const totalOctane = octanePrice*octane;
    const totalPrice  = totalDiesel+totaPetrol+totalOctane;
    return totalPrice;
}
const output = oilPrice(5,7,1);
console.log(output);

//---------------------------------------------------------

// problem = 4 -------- calculate public bus fare. 
function publicBusFare(num){
    //cheaking input types.
    if(typeof num !== 'number'){
        return 'why dont you enter a number :('
    }
    const needPeople='need more people';
    if(num>49&& num<=Infinity){
        // reserved bus 50
        // microbus  11
        // rest will go by public bus
        const perPersonTicket = 250;
        const afterBusManleft = num%50;
        const afterMicroManLeft = afterBusManleft%11;
        const publicbus = afterMicroManLeft*perPersonTicket;
        return publicbus;
    }
    return needPeople;
}
const input =65;
const output = publicBusFare(input);
console.log(output);

//------------------------------------------------------

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

// End of the code ----------------------========================