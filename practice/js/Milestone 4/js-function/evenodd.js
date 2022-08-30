function evenOdd(input) {
    const even = input;
    if (even % 2 === 0) {
        console.log(true);
    }
    else {
        console.log(false);
    }
    return even;
    }
    const myInput = 23;
    const even_odd = evenOdd(myInput);
    // console.log(even_odd);