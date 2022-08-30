for(let i = 1; i<=50; i++ ){
    let number = i;
    if(number%3===0 && number%5===0){
        console.log('foo bar');
    }
    else if(number%3 ===0){
        console.log('foo');
    }
    else if(number%5 === 0){
        console.log('bar');
    }
    console.log(i);
}