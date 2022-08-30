function sum(i){
    if(i===50){
        return 50;
    }
    console.log(i);
    return i+sum(i+1);
}
console.log(sum(1));
/* let sum2 = 0;
for(let i=1;i<=50;i++){
    sum2+=i;
}
console.log(sum2); */