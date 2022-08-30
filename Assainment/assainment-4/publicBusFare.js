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