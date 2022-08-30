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