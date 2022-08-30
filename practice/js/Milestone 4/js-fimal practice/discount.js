/* 
*first 100 ticket prize will ber
    100---->100tk
*second 100 will ber 
    100---->100tk
    100---->90tk
*third 100 will be
    100 ---->100tk
    100 ---->90tk
    100 ---->70tk

    write a function to callculate this value
*/

function totalDiscount(num){
    const first100 = 100;
    const second100 = 90;
    const rest = 70;
    if(num<=100){
        const ticket100Price = num * first100;
        return ticket100Price;
    }
    else if(num<=200){
        const ticket100PriceFor2nd = 100*second100;
        const restticket = num - 100;
        const second100Price = restticket * second100;
        const ticketsecond100price = ticket100PriceFor2nd + second100Price;
        return ticketsecond100price;
    }else{
        const ticket100PriceFor3rd = 100*100;
        const ticketsecond100priceFor3rd = 100*90;
        const restticket = num - 200;
        const third100Price = restticket *rest;
        const ticketthird100price = ticket100PriceFor3rd+ticketsecond100priceFor3rd+third100Price;
        return ticketthird100price;
    }

}
const output = totalDiscount(900);
console.log(output);