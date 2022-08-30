const phones = [
    {name:'samsung',  camera:'100mb', price:300,  color:'silver'},
    {name:'oppo',     camera:'200mb', price:350,  color:'silver'},
    {name:'xaomi',    camera:'100mb', price:200,  color:'silver'},
    {name:'realme',   camera:'90mb',  price:340, color:'silver'},
    {name:'one-plus', camera:'150mb', price:300, color:'silver'},
];

function cheapestPhone(phone){
    let chepPhone = phone[0];
    for(let i = 0; i<phone.length; i++){
        const element = phone[i];
        if(element.price<chepPhone.price){
            chepPhone = element;
        }
    }
    return chepPhone;
}
const output = cheapestPhone(phones);
console.log(output);