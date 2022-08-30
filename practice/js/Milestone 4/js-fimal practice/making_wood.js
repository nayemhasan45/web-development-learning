function woodcalculator(woodForchair,woodFortable,woodForbed){
    const perchairwood =3;
    const pertablewood = 10;
    const perbedwood = 50;
    const chairwood = perchairwood*woodForchair;
    const tablewood = pertablewood*woodFortable;
    const bedwood = perbedwood*woodForbed;
    const totalWood = chairwood+tablewood+bedwood;
    return totalWood;

}
const input = woodcalculator(2,2,5);
console.log(input);