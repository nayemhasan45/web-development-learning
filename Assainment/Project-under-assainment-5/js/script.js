function getValue(id) {
    const getNum = document.getElementById(id);
    const getValue = parseFloat(getNum.value);
    return getValue;
}
document.getElementById('total-calculate').addEventListener('click', function () {
    const totalIncome = getValue('total-income');
    const foodExpence = getValue('food-expence');
    const rentExpence = getValue('rent-expence');
    const clothesExpence = getValue('clothes-expence');

    const Expence = foodExpence + rentExpence + clothesExpence;
    const gettotalExpences = document.getElementById('total-expences');
    const gettotalExpencesV = parseFloat(gettotalExpences.innerText);
    gettotalExpences.innerText = Expence;


    const getTotalBalance = document.getElementById('remaning-balance');
    const getTotalBalanceV = parseFloat(getTotalBalance.innerText);
    const newBalance = totalIncome - Expence;
    getTotalBalance.innerText = newBalance;


})

document.getElementById('saving-btn').addEventListener('click', function () {
    const getSaveBox = getValue('saving-percent');
    const totalIncome = getValue('total-income');
    const savingAmmount = document.getElementById('saving-ammount');
    const totalSaving = totalIncome * (getSaveBox / 100);
    savingAmmount.innerText = totalSaving;


    const getTotalBalance = document.getElementById('remaning-balance');
    const getTotalBalanceV = parseFloat(getTotalBalance.innerText);


    const getSaveBalance = document.getElementById('save-balance');
    const remaningMain = getTotalBalanceV - totalSaving;
    getSaveBalance.innerText = remaningMain;



})