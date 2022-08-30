function caseQuantity(istrue) {
    const caseInputField = document.getElementById('case-input-field');
    const preCaseInputFieldIntV = parseInt(caseInputField.value);
    let newCaseInputFiled;
    if (istrue === true) {
        newCaseInputFiled = preCaseInputFieldIntV + 1;
    } else {
        if (preCaseInputFieldIntV > 0) {
            newCaseInputFiled = preCaseInputFieldIntV - 1;
        } else {
            alert('please buy a product');
            return;
        }
    }
    caseInputField.value = newCaseInputFiled;
    return newCaseInputFiled;
}

function totalCasePrice(caseInputValue) {
    const caseSpan = document.getElementById('case-span');
    const totalCasePrice = caseInputValue * 59;
    if (totalCasePrice >= 0) {
    } else {
        alert('Bye some products');
        return;
    }
    caseSpan.innerText = totalCasePrice;
    return totalCasePrice;
}
document.getElementById('case-plus').addEventListener('click', function () {
    const caseInputValue = caseQuantity(true);
    const caseTotalPrice = totalCasePrice(caseInputValue);
    calculateSubtotal();
})
document.getElementById('case-minus').addEventListener('click', function () {
    const caseInputValueM = caseQuantity();
    const caseTotalPrice = totalCasePrice(caseInputValueM);
    calculateSubtotal();
})