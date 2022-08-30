function getElementById(id) {
    const phoneTotal = document.getElementById(id);
    const phoneTotalV = parseInt(phoneTotal.innerText);
    return phoneTotalV;
}

function calculateSubtotal() {
    const getsubtotla = document.getElementById('sub-total');
    const phoneTotal = getElementById('iphone-price');
    const caseTotal = getElementById('case-span');
    const subTotal = phoneTotal + caseTotal;
    getsubtotla.innerText = subTotal;

    // calculate tax 
    const tax = parseFloat(subTotal * 0.1);
    const gettax = document.getElementById('tax');
    gettax.innerText = tax.toFixed(2);

    // calculate total 
    const total = subTotal + tax;
    const gettotal = document.getElementById('total');
    gettotal.innerText = total;
}
