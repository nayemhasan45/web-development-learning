function bringciggrate(money){
    console.log('mama chigarate den');
    // console.log(money);
    const givenmony = money + 5;
    return givenmony;

}
console.log(bringciggrate(5));


function getchig(money){
    console.log('total price:',money);
    const chigPrice = 6;
    const chigGet = money / chigPrice;
    const moneyLeft = money % 6;
    return chigGet , moneyLeft;
}

let haveMoney = getchig(129);
console.log(haveMoney);


function threeAdd(num1, num2, num3){
    const total = num1+ num2+ num3;
    return total;
}

let my_marks = threeAdd(5,6,7);
console.log(my_marks);