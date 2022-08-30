function bus(num){
    const busneed = Math.floor(num/50);
    const manleft = num%50;
    const microneed = Math.floor(manleft/11);
    const manleftF = manleft%11;
    const publicbus = manleftF*250;
    console.log(busneed,manleft,microneed,manleftF);
    return publicbus;
}
console.log(bus(129));