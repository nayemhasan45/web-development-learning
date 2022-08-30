document.getElementById('deposit-btn').addEventListener('click',function(){
    // get the input value in float 
    const getDipositAmount = makeParseFloat('getAmount');
    if(isNaN(getDipositAmount)){
        alert('please provide a number');
        return;
    }
    const getDipositInner = makeParseFloatInnertext('display-firstSpan');
    const getTotalDiposit = getDipositAmount + getDipositInner;
    setInnervalueById('display-firstSpan',getTotalDiposit);
    const getBalanceAmount = makeParseFloatInnertext('total-Balance');
    const getTotalBalance = getBalanceAmount + getDipositAmount;
    setInnervalueById('total-Balance',getTotalBalance);
    // console.log(getTotalBalance);
})