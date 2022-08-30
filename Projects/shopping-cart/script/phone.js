function quantity(isIncrise) {
    const getphoneInputField = document.getElementById('phoneInputField');
    const getphoneInputFieldVInt = parseInt(getphoneInputField.value);
    let newvalue;
    if (isIncrise === true) {
        newvalue = getphoneInputFieldVInt + 1;

    } else {
        if (getphoneInputFieldVInt > 0) {
            newvalue = getphoneInputFieldVInt - 1;
        } else {
            alert('bye atleast one products')
        }
    }
    getphoneInputField.value = newvalue;
    return newvalue;
}

function totalPhonePrice(phonePlus) {
    const getPrice = document.getElementById('iphone-price');
    const PhoneTotalPrice = 1219 * phonePlus;
    getPrice.innerText = PhoneTotalPrice;
}
document.getElementById('iPhonePluse').addEventListener('click', function () {
    const phonePlus = quantity(true);
    totalPhonePrice(phonePlus);
    calculateSubtotal();
})
document.getElementById('iphoneMinus').addEventListener('click', function () {
    const phoneMinus = quantity();
    totalPhonePrice(phoneMinus);
    calculateSubtotal()
})